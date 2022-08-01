import { LightningElement, wire, track } from 'lwc';
import covidZip from '@salesforce/resourceUrl/CovidNew';
import { loadScript } from 'lightning/platformResourceLoader';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { publish, subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import covidSendMessage from '@salesforce/messageChannel/covidSendMessage__c';
import doughnutTOBarMessageChannel from '@salesforce/messageChannel/doughnutToBar__c';

export default class CovidDoughnout extends LightningElement {

    isChartJsInitialized = false;
    subscription;
    filters = {};
    title = '';

    @wire(MessageContext)
    messageContext;

    data = {
        labels: ["Confirmed", "Recovered", "Deceased"], 
        datasets: [
            {
                data: [0, 0, 0],
                backgroundColor: [
                    "rgba(255,255,0,.8)",
                    "rgba(0,255,0,.8)",
                    "rgba(255,0,0,0.8)"
                ],
                hoverBackgroundColor: [
                    "rgba(255,255,0,1)",
                    "rgba(0,255,0,1)",
                    "rgba(255,0,0,1)"
                ]                
            }
        ]
    };

    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    renderedCallback() {
        if (this.isChartJsInitialized){
            return ;
        }
        Promise.all([loadScript(this, covidZip + '/ChartJS23.js'),  loadScript(this, covidZip + '/Covid.js')])
            .then(() => {
                this.isChartJsInitialized = true;
                const ctx = this.template.querySelector('canvas.doughnutChart').getContext('2d');
                var chart = new Chart(ctx, {
                            type: 'doughnut',
                            data: this.data,
                            options: {
                                responsive: true,
                                onClick: (event) => {
                                    var elements = chart.getElementAtEvent(event);
                                    if (elements.length === 1) {
                                        var date = this.filters.date;
                                        var type =this.data.labels[elements[0]._index];
                                        this.handleFilterChange(date, type);
                                    }
                                }
                            }
                });
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error loading Chart',
                        message: 'aasas',
                        variant: 'error',
                    })
                );
            });
    }

    handleFilterChange(date, type){
        const payload = { doughnutTOBarFilter: {date: date, type: type} };
        console.log('payload', payload);
        publish(this.messageContext, doughnutTOBarMessageChannel, payload);
    }

    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                covidSendMessage,
                (message) => this.handleMessage(message)
            );
        }
    }

    handleMessage(message) {
        this.filters = {...message.filters};
        console.log('filter', this.filters);
        let d = window.Covid.getData();
        d.forEach(item => {
            if(item.date === this.filters.date){
                item.states.forEach(element => {
                    if(element.state === this.filters.state){
                        this.data.datasets[0].data = [element.confirmed, element.recovered, element.deceased];
                        this.title = item.date + ', ' + element.state;
                    }
                })
            }
        });
        this.isChartJsInitialized = false;
    }

    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }

    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

}
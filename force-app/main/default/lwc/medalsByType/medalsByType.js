import { LightningElement, wire, track } from 'lwc';
import olympics from '@salesforce/resourceUrl/Olympics';
import { loadScript } from 'lightning/platformResourceLoader';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { publish, subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import timelineToDoughnoutMessageChannel from '@salesforce/messageChannel/timelineToDoughnout__c';
import doughnutTOBarMessageChannel from '@salesforce/messageChannel/doughnutToBar__c';

export default class MedalsByType extends LightningElement {

    isChartJsInitialized = false;
    subscription;
    filters = {};
    title = '';

    @wire(MessageContext)
    messageContext;

    data = {
        labels: ["Gold", "Silver", "Bronze"], 
        datasets: [
            {
                data: [0, 0, 0],
                backgroundColor: [
                    "rgba(255,203,75,.8)",
                    "rgba(143,134,132,.8)",
                    "rgba(153,119,61,.8)"
                ],
                hoverBackgroundColor: [
                    "rgba(255,203,75,1)",
                    "rgba(143,134,132,1)",
                    "rgba(143,125,92,1)"
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
        Promise.all([loadScript(this, olympics + '/ChartJS23.js'), loadScript(this, olympics + '/OlympicDataService.js')])
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
                                        var year = this.filters.year;
                                        var medalType =this.data.labels[elements[0]._index];
                                        this.handleFilterChange(year, medalType);
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

    handleFilterChange(year, medalType){
        const payload = { doughnutTOBarFilter: {year: year, medalType: medalType} };
        publish(this.messageContext, doughnutTOBarMessageChannel, payload);
    }

    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                timelineToDoughnoutMessageChannel,
                (message) => this.handleMessage(message)
            );
        }
    }

    handleMessage(message) {
        this.filters = {...message.filters};
        let d = window.olympicDataService.getData();
        d.forEach(item => {
            if(item.year === this.filters.year){
                item.countries.forEach(element => {
                    if(element.country === this.filters.country){
                        this.data.datasets[0].data = [element.gold, element.silver, element.bronze];
                        this.title = item.year + ', ' + element.country;
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
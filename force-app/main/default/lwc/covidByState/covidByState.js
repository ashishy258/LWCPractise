import { LightningElement, wire, track } from 'lwc';
import covidZip from '@salesforce/resourceUrl/CovidNew';
import { loadScript } from 'lightning/platformResourceLoader';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { publish, subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import doughnutTOBarMessageChannel from '@salesforce/messageChannel/doughnutToBar__c';

export default class CovidByState extends LightningElement {

    isChartJsInitialized = false;
    doughnutClicked = false;
    subscription;
    filters = {};
    title = '';
    backgroundColor =  {
        Confirmed: "rgba(255,255,0,.8)",
        Recovered: "rgba(0,255,0,.8)",
        Deceased: "rgba(255,0,0,0.8)"
    };

    @wire(MessageContext)
    messageContext;

    data = {
        labels: [], 
        datasets: [
            {   
                label: '',
                data: [],
                backgroundColor: ''           
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
                const ctx = this.template.querySelector('canvas.barChart').getContext('2d');
                if(this.doughnutClicked){
                    var chart = new Chart(ctx, {
                        type: 'bar',
                        data: this.data,
                        options: {
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }
                });
                }
                
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

    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                doughnutTOBarMessageChannel,
                (message) => this.handleMessage(message)
            );
        }
    }

    handleMessage(message) {
        console.log('here covid', message);

        this.filters = {...message.doughnutTOBarFilter};
        console.log('here filters', this.filters);
        this.data.datasets[0].data = [];
        this.data.labels = [];
        let type = this.filters.type;
        let d = window.Covid.getData();
        console.log('here data 1', d);
        d.forEach(item => {
            if(item.date === this.filters.date){
                item.states.forEach(element => {
                    this.data.labels = [...this.data.labels, element.state];
                    this.data.datasets[0].label = type;
                    this.data.datasets[0].data = [...this.data.datasets[0].data, element[type.toLowerCase()]];
                    this.title = item.date + ', ' + type;
                    this.data.datasets[0].backgroundColor = this.backgroundColor[type];
                })
            }
        });
        console.log('here data', this.data);
        this.isChartJsInitialized = false;
        this.doughnutClicked = true;
    }

    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }

    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

}
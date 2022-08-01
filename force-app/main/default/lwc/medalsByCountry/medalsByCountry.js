import { LightningElement, wire, track } from 'lwc';
import olympics from '@salesforce/resourceUrl/Olympics';
import { loadScript } from 'lightning/platformResourceLoader';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { publish, subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import doughnutTOBarMessageChannel from '@salesforce/messageChannel/doughnutToBar__c';

export default class MedalsByCountry extends LightningElement {

    isChartJsInitialized = false;
    doughnutClicked = false;
    subscription;
    filters = {};
    title = '';
    backgroundColor =  {
        Gold: "rgba(255,203,75,.8)",
        Silver: "rgba(143,134,132,.8)",
        Bronze: "rgba(153,119,61,.8)"
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
        Promise.all([loadScript(this, olympics + '/ChartJS23.js'), loadScript(this, olympics + '/OlympicDataService.js')])
            .then(() => {
                this.isChartJsInitialized = true;
                console.log('here');
                console.log(this.data.datasets[0].data);
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
        this.filters = {...message.doughnutTOBarFilter};
        this.data.datasets[0].data = [];
        this.data.labels = [];
        console.log(this.filters.medalType, 'adasasasa');
        let type = this.filters.medalType;
        let d = window.olympicDataService.getData();
        d.forEach(item => {
            if(item.year === this.filters.year){
                item.countries.forEach(element => {
                    this.data.labels = [...this.data.labels, element.country];
                    this.data.datasets[0].label = type;
                    this.data.datasets[0].data = [...this.data.datasets[0].data, element[type.toLowerCase()]];
                    this.title = item.year + ', ' + type;
                    this.data.datasets[0].backgroundColor = this.backgroundColor[type];
                })
            }
        });
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
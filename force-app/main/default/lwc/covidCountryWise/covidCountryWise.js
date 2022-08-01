import { LightningElement, wire } from 'lwc';
import covidZip from '@salesforce/resourceUrl/CovidNew';
import fetchCovidData from '@salesforce/apex/CovidDataController.fetchCovidData'
import createBigObjectRecords from '@salesforce/apex/CovidDataController.createBigObjectRecords'
import { loadScript } from 'lightning/platformResourceLoader';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { publish, MessageContext } from 'lightning/messageService';
import covidSendMessage from '@salesforce/messageChannel/covidSendMessage__c';

export default class CovidCountryWise extends LightningElement {

    isChartJsInitialized;
    allDate = [];
    confirmed = [];
    recovered = [];
    deceased = [];
    primaryData = [];
    groupedDataC = [];
    groupedDataR = [];
    groupedDataD = [];
    mainData = [];
    secData = [];
    labels = [];
    states = [];
    datasets = [];
    covidData = {};
    tempObj = {};
    context = '';
    mainMainData = [];

    @wire(MessageContext)
    messageContext;

    renderedCallback() {
        if (this.isChartJsInitialized){
            return ;
        }
        fetchCovidData()
            .then(data => {
                 this.primaryData = JSON.parse(data).states_daily;
                 this.populateData(this.primaryData);
            })
            .catch(error => {
                console.log(error);
            });

        Promise.all([loadScript(this, covidZip + '/ChartJS23.js'),  loadScript(this, covidZip + '/Covid.js')])
            .then(() => {
                this.isChartJsInitialized = true;
                this.populateDataAgain(window.Covid.getData());
                 this.createDataset(this.states);
                const ctx = this.template.querySelector('canvas.lineChart').getContext('2d');
                var chart = new Chart(ctx, {
                            type: 'line',
                            data: {
                                datasets: this.datasets,
                                labels: this.labels,
                            },
                            options: {
                                responsive: true,
                                onClick: (event) => {
                                    var elements = chart.getElementAtEvent(event);
                                    console.log('event', elements);
                                    if (elements.length === 1) {
                                        var date = this.labels[elements[0]._index];
                                        var state = this.datasets[elements[0]._datasetIndex].label;
                                        this.handleFilterChange(date, state);
                                    }
                                }
                            }
                        });          
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error loading Chart',
                        message: error.message,
                        variant: 'error',
                    })
                );
            });
    }

    handleFilterChange(date, state) {
        const payload = { filters: {date: date, state: state} };
        console.log(payload);
        publish(this.messageContext, covidSendMessage, payload);
    }

    populateData(data){
        data.forEach(element => {
            if(element.status === 'Confirmed'){
                let insideData = [];
                Object.keys(element).forEach(k => {
                    if(k !== 'status' && k !== 'date' && k !== 'dateymd'){
                        insideData = [...insideData, {'state': k, 'confirmed': element[k], 'recovered': 0, 'deceased': 0}]
                    }
                });
                this.allDate = [...this.allDate, {'date': element.date, 'states': insideData}];  
            }
        });
        data.forEach(element => {
            if(element.status === 'Recovered'){
                let insideData = [];
                this.allDate.forEach(item => {
                    if(item.date === element.date){
                        item.states.forEach(elem => {
                            insideData = [...insideData, {'state': elem.state, 'confirmed': elem.confirmed, 'recovered': element[elem.state], 'deceased': 0}];
                        });
                    }
                })
                this.secData = [...this.secData, {'date': element.date, 'states': insideData}];   
            }
        });
        data.forEach(element => {
            if(element.status === 'Deceased'){
                let insideData = [];
                this.secData.forEach(item => {
                    if(item.date === element.date){
                        item.states.forEach(elem => {
                            insideData = [...insideData, {'state': elem.state, 'confirmed': elem.confirmed, 'recovered': elem.recovered, 'deceased': element[elem.state]}];
                        });
                    }
                })
                this.mainData = [...this.mainData, {'date': element.date, 'states': insideData}];   
            }
        });
        this.mainData.forEach(element => {
            if(element.date.includes('01')){
                let insideData = [];
                element.states.forEach(item => {
                    if(!item.state.includes('tt') && !item.state.includes('mh')){
                        this.mainMainData = [...this.mainMainData, {'dateOne': element.date,'state': item.state, 'confirmed': item.confirmed, 'recovered': item.recovered, 'deceased': item.deceased}];
                    }
                }); 
                //this.mainMainData = [...this.mainMainData, {'dateOne': element.date, 'states': insideData}];
            }
        });
        console.log('mainData', this.mainData);
        console.log('mainMainData', this.mainMainData);
    }

    populateDataAgain(data){
        data.forEach(item => {
            this.labels.push(item.date);
            item.states.forEach(element => {
                if (this.states[element.state]) {
                	this.states[element.state].push(element.confirmed);    
                } else {
                 	this.states[element.state] = [element.confirmed];   
                }
            })
        });
    }

    createDataset(states){
        var i=0;

        var colors = [
            'rgba(255,0,0,1)',
            'rgba(0,255,0,1)',
            'rgba(0,0,255,1)',
            'rgba(255,255,0,1)',
            'rgba(0,255,255,1)',
            'rgba(255,0,255,1)',
            'rgba(128,0,0,1)',
            'rgba(128,128,0,1)',
            'rgba(0,128,0,1)',
            'rgba(128,0,128,1)',
            'rgba(0,128,128,1)',
            'rgba(0,0,128,1)',
            'rgba(255,0,0,1)',
            'rgba(0,255,0,1)',
            'rgba(0,0,255,1)',
            'rgba(255,255,0,1)',
            'rgba(0,255,255,1)',
            'rgba(255,0,255,1)',
            'rgba(128,0,0,1)',
            'rgba(128,128,0,1)',
            'rgba(0,128,0,1)',
            'rgba(128,0,128,1)',
            'rgba(0,128,128,1)',
            'rgba(0,0,128,1)',
            'rgba(255,0,0,1)',
            'rgba(0,255,0,1)',
            'rgba(0,0,255,1)',
            'rgba(255,255,0,1)',
            'rgba(0,255,255,1)',
            'rgba(255,0,255,1)',
            'rgba(128,0,0,1)',
            'rgba(128,128,0,1)',
            'rgba(0,128,0,1)',
            'rgba(128,0,128,1)',
            'rgba(0,128,128,1)',
            'rgba(0,0,128,1)',
            'rgba(255,0,0,1)',
            'rgba(0,255,0,1)',
            'rgba(0,0,255,1)',
            'rgba(255,255,0,1)',
            'rgba(0,255,255,1)',
            'rgba(255,0,255,1)',
            'rgba(128,0,0,1)',
            'rgba(128,128,0,1)',
            'rgba(0,128,0,1)',
            'rgba(128,0,128,1)',
            'rgba(0,128,128,1)',
            'rgba(0,0,128,1)'
        ];

        Object.keys(this.states).forEach(item => {
            this.datasets = [...this.datasets, {label: item, 
                data: this.states[item],
                fill: false,
                borderWidth: 1.5,
                backgroundColor: colors[i++],
                borderColor: colors[i],
                pointBackgroundColor: "#FFFFFF",
                pointBorderWidth: 4,
                pointHoverRadius: 8,
                pointRadius: 6,
                pointHitRadius: 10}];
        });
    }

    handleClick(){
        createBigObjectRecords({recordsJsonFromJs: JSON.stringify(this.mainMainData)})
            .then(data => {
                const evt = new ShowToastEvent({
                title: 'successfully created',
                variant: 'success',
                });
                this.dispatchEvent(evt);
            })
            .catch(error => {
                const evt = new ShowToastEvent({
                title: 'records creation fail',
                variant: 'error',
                });
                this.dispatchEvent(evt);
            });
    }
}
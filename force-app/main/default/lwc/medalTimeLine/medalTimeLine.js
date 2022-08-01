import { LightningElement, api, wire } from 'lwc';
import olympics from '@salesforce/resourceUrl/Olympics';
import { loadScript } from 'lightning/platformResourceLoader';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { publish, MessageContext } from 'lightning/messageService';
import timelineToDoughnoutMessageChannel from '@salesforce/messageChannel/timelineToDoughnout__c';

export default class MedalTimeLine extends LightningElement {

    isChartJsInitialized = false;
    labels = [];
    countries = [];
    datasets = [];

    @wire(MessageContext)
    messageContext;

    renderedCallback() {
        if (this.isChartJsInitialized){
            return ;
        }
        Promise.all([loadScript(this, olympics + '/ChartJS23.js'), loadScript(this, olympics + '/OlympicDataService.js')])
            .then(() => {
                this.isChartJsInitialized = true;
                this.populateData(window.olympicDataService.getData());
                this.createDataset(this.countries);
                console.log('countries', this.countries);
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
                                    if (elements.length === 1) {
                                        var year = this.labels[elements[0]._index];
                                        var country = this.datasets[elements[0]._datasetIndex].label;
                                        this.handleFilterChange(year, country);
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

    handleFilterChange(year, country) {
        const payload = { filters: {year: year, country: country} };
        console.log(payload);
        publish(this.messageContext, timelineToDoughnoutMessageChannel, payload);
    }

    populateData(data){
        data.forEach(item => {
            this.labels.push(item.year);
            item.countries.forEach(element => {
                var total = element.gold + element.silver + element.bronze;
                if (this.countries[element.country]) {
                	this.countries[element.country].push(total);    
                } else {
                 	this.countries[element.country] = [total];   
                }
            })
        });
    }

    createDataset(countries){
        var i=0;
        var colors = [
            'rgba(23, 48, 91, 1)',
            'rgba(62, 159, 222, 1)',
            'rgba(48, 165, 154, 1)',
            'rgba(132, 220, 214, 1)',
            'rgba(222, 159, 0, 1)',
            'rgba(223, 205, 114, 1)'
        ];
        Object.keys(this.countries).forEach(item => {
            this.datasets = [...this.datasets, {label: item, 
                data: countries[item],
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
}
import { LightningElement, api, wire } from 'lwc';
import chartjs from '@salesforce/resourceUrl/ChartJS23';
//import interest from '@salesforce/resourceUrl/interest';
import getOpportunities from '@salesforce/apex/GEN_ChartController.getOpportunities';
import { loadScript } from 'lightning/platformResourceLoader';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
 
export default class Gen_barchart extends LightningElement {
    chartAmtData = [];
    chartRevData = [];
    chartLabel = [];
    isChartJsInitialized = false;

    @wire(getOpportunities)
    getOpportunities({ error, data }) {
        if (error) {
            this.error = error;
        } else if (data) {
            data.forEach(opp => {
                this.chartAmtData = [...this.chartAmtData, opp.amount];
                this.chartRevData = [...this.chartRevData, opp.expectRevenue];
                this.chartLabel = [...this.chartLabel, opp.stage];
            });
            console.log(this.chartAmtData);
            this.showChart();
        }
        
    }
    
    showChart() {
        if (this.isChartJsInitialized){
            return ;
        }
        Promise.all([loadScript(this, chartjs)])
            .then(() => {
                this.isChartJsInitialized = true;
                console.log('here');
                // const interest = myLib.calculatePrincipleInterest(4567);
                // console.log(interest);
                console.log(this.chartAmtData);
                const ctx = this.template.querySelector('canvas.barChart').getContext('2d');
                var chart = new Chart(ctx, {
                            type: 'line',
                            data: {
                                datasets: [{
                                        label: 'Amount',
                                        backgroundColor: "green",
                                        fill: false,
                                        data: this.chartAmtData,
                                    },
                                    {
                                        label: 'Expected Revenue',
                                        backgroundColor: "orange",
                                        fill: false,
                                        data: this.chartRevData,
                                    },
                                ],
                                labels: this.chartLabel,
                            },
                            options: {
                                responsive: true,
                                onClick: function(event){
                                    var elements = chart.getElementAtEvent(event);
                                    console.log('ashish');
                                    console.log(elements);
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
}
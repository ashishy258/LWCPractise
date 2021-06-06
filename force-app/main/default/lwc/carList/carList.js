import { LightningElement, wire } from 'lwc';
import getFilteredCars from '@salesforce/apex/CarHubController.getFilteredCars';
import { subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import carFilterMessageChannel from '@salesforce/messageChannel/carFilter__c';

export default class CarList extends LightningElement {

    cars;
    error;
    filters = {};
    subscription;

    @wire(MessageContext)
    messageContext;

    @wire(getFilteredCars, { filterKey: '$filters'})
    getAllCars({data, error}){
        if (data) {
            this.cars = data;
        }
        else if (error) {
            this.error = error;
            console.error(error);
        }
    }

    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                carFilterMessageChannel,
                (message) => this.handleMessage(message)
            );
        }
    }

    // Handler for message received by component
    handleMessage(message) {
        this.filters = {...message.filters};
    }

    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }

    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

}
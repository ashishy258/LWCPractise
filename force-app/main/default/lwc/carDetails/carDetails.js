import { LightningElement, wire } from 'lwc';
import CARHUB_LOGO from '@salesforce/resourceUrl/carHubLogo';
import { subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import sendRecordIdChannel from '@salesforce/messageChannel/sendRecordId__c';
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Car__c.Name';
import PICTURE_URL_FIELD from '@salesforce/schema/Car__c.Picture_URL__c';

export default class CarDetails extends LightningElement {
    carLogo = CARHUB_LOGO;
    recordId;
    subscription;
    name;
    pictureURL;
    recordHREF;

    @wire(getRecord, { recordId: '$recordId', fields: [NAME_FIELD, PICTURE_URL_FIELD] })
    car({data, error}){
        if(data){
            this.name = data.fields.Name.value;
            this.pictureURL = data.fields.Picture_URL__c.value;
            console.log(data);
        }
        else if (error){
            console.log(error);
        }
    };

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                sendRecordIdChannel,
                (message) => this.handleMessage(message)
            );
        }
    }

    // Handler for message received by component
    handleMessage(message) {
        this.recordId = message.recordId;
        this.recordHREF = '/'+this.recordId;
    }

    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }

    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }
}
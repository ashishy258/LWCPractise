import { LightningElement, api, wire } from 'lwc';
import getRelatedContacts from '@salesforce/apex/AccountControllerAssignment.getRelatedContacts';
import sendWelcomeMail from '@salesforce/apex/AccountControllerAssignment.sendWelcomeMail';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const COLUMNS = [
    { label: 'Id', fieldName: 'Id' },
    { label: 'Name', fieldName: 'Name' },
    { label: 'Email', fieldName: 'Email' },];

export default class WelcomeMailToContacts extends LightningElement {

    @api recordId;
    data = [];
    emailIds = [];
    columns = COLUMNS;
    showModal = false;

    handleClick(){
        this.showModal = true;
    }

    @wire(getRelatedContacts, {parentAccId: '$recordId'})
    relatedContacts({ error, data }){
        if (data) {
            this.data = data;
            console.log(data);
        }
        else if (error) {
            console.log(error);
        }
    }

    getSelectedContact(event) {
        const selectedRows = event.detail.selectedRows;
        this.emailIds = selectedRows.map(elem => {
            return elem.Email;
        });
    }

    handleCancel(){
        this.showModal = false;
        this.emailIds = [];
    }

    handleSendMail(){
        console.log(this.emailIds);
        sendWelcomeMail({emailIds: this.emailIds})
        .then(data =>{
            console.log(data);
            const event = new ShowToastEvent({
            variant: 'success',
            message: 'Email has been sent Successfully',
            });
            this.dispatchEvent(event);
            this.showModal = false;
        })
        .catch(error => {
            console.log(error);
            const event = new ShowToastEvent({
            variant: 'error',
            message:'Failure has occured',
            });
            this.dispatchEvent(event);
        });
    }
}
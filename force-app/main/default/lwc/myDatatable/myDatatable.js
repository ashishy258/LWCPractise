/* myDatatable.js */
import { LightningElement, wire, track } from 'lwc';
import getAccountListCustom from '@salesforce/apex/AccountController.getAccountListCustom';

const COLS = [
    { label: 'Account Name', type: 'customText',
     typeAttributes: {
        accountName: { fieldName: 'Name' }
    },
    },
    { label: 'Industry', fieldName: 'Industry', 
    cellAttributes: {
        class: {fieldName: 'industryColor'},
    }
    },
    { label: 'Employees', type: 'customNumber', fieldName: 'NumberOfEmployees',
     typeAttributes: {
        status: {fieldName: 'status'}
    },
    cellAttributes: {
        class: 'slds-theme_alert-texture'
    }
}];

export default class MyDatatable extends LightningElement {
    columns = COLS;
    @track accounts = [];

    @wire(getAccountListCustom)
    wiredAccounts({error, data}) {
        if (error) {
            // Handle error
        } else if (data) {
            // Process record data
            this.accounts = data.map((record) => {
                let industryColor = record.Industry === 'Energy' ? 'slds-text-color_success': '';
                let status = record.NumberOfEmployees > 10000 ? 'utility:ribbon' : '';
                return {...record, 
                    'industryColor': industryColor,
                    'status': status
                }
            });
            
        }
    }
}
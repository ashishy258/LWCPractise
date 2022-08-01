import { LightningElement, track } from 'lwc';
import getFieldsMapOnObject from '@salesforce/apex/DynamicDataTable.getFieldsMapOnObjectList'
import getRecords from '@salesforce/apex/DynamicDataTable.getRecords'
export default class DynamicObjectsDataTable extends LightningElement {

    objectOptions = [
        { label: 'Account', value: 'Account' },
        { label: 'Lead', value: 'Lead' },
        { label: 'Contact', value: 'Contact' },
    ];
    pillsList = [];
    fields = [];
    columns = [];
    filteredData = [];
    fieldsToRetrieve = [];
    showFields = false;
    showPills = false;
    fieldsAvailable = false;
    inputSelectedFields = '';
    inputIcon = 'utility:chevronleft';

    selectedObjectValue = '';
    selectedField = '';
    objName;

    handleObjectChange(event){
        this.objName = event.target.value;
        getFieldsMapOnObject({ objName: this.objName })
            .then((result) => {
                this.fields = result;
                //this.fieldsAvailable = true;
                console.log(this.fieldsAvailable);
                console.log(this.fields);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    showHideFields(){
        if (this.showFields === false && this.fields.length > 0 ) {
            this.showFields = true;
            this.showPills = false;
            this.fieldsAvailable = true;
            this.inputIcon = 'utility:close';
        }
        else if (this.showFields === true) {
            this.showPills = true;
            this.showFields = false;
            this.fieldsAvailable = false;
            this.inputIcon = 'utility:chevronleft';
        }
    }

    fieldSelection(event){
        const label = event.target.dataset.label;
        const value = event.target.dataset.value;
        if (label !== undefined && value !== undefined) {
            this.pillsList = [...this.pillsList, {label: label, fieldName: value}];
            this.inputSelectedFields = this.inputSelectedFields + ', '+ label;
            this.fieldsToRetrieve = [...this.fieldsToRetrieve, value];
        }
        console.log(this.fieldsToRetrieve);
    }

    handleRefersh(){
        this.columns = this.pillsList;
        console.log(this.columns);
        getRecords({objName: this.objName, fields: this.fieldsToRetrieve})
        .then((result) => {
            this.filteredData = result;
            //this.fieldsAvailable = true;
            console.log(this.filteredData);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    removeRecordOnLookup(){
        console.log('Ashish');
    }
}
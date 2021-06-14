import { LightningElement, api, wire } from 'lwc';
import { getPicklistValuesByRecordType , getObjectInfo } from 'lightning/uiObjectInfoApi';
import getRelatedCars from '@salesforce/apex/CarHubController.getRelatedCars';
import CAR_OBJECT from '@salesforce/schema/Car__c';
import { getRecord } from 'lightning/uiRecordApi';
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__c';
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c';
import CONTROL_FIELD from '@salesforce/schema/Car__c.Control__c';


export default class RelatedCars extends LightningElement {

    show = false;
    selectedType = '';
    optionsType = [];
    recordValues = [];
    finalData = [];
    @api recordId;
    @api objectAPIName;

    @wire(getObjectInfo, { objectApiName: CAR_OBJECT })
    recordTypeInfo;

    @wire(getPicklistValuesByRecordType, { objectApiName: CAR_OBJECT, recordTypeId: '$recordTypeInfo.data.defaultRecordTypeId' })
    picklistFields({data, error}){
        if (data) {
            this.optionsType = [{ label: 'None', value: ''}, ...Object.keys(data.picklistFieldValues).map(item =>{
                                return { label: item, value: item}
            })];
            console.log(this.optionsType);
        }
        else if (error) {
            console.error(error);
        }
    };

    @wire(getRecord, { recordId: '$recordId', fields: [ CATEGORY_FIELD, MAKE_FIELD, CONTROL_FIELD ]})
    picklistRecordValues({data, error}){
        if(data){
            this.recordValues = Object.keys(data.fields).map(item => {
                        return { fieldName: item, value: data.fields[item].value }
            });
            console.log('heere', this.recordValues);
        }
        else if(error){
            console.log(error);
        }
    }

    handleSearch(){
        this.show = true;
    }

    handleTypeChange(event){
        this.finalData = [];
        const arr = this.recordValues.filter(item => {
            return item.fieldName === event.target.value;
        });
        console.log(arr);
        getRelatedCars({ recordId: this.recordId, criteria: arr })
            .then(result => {
                this.finalData = result;
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            });  
    }
}
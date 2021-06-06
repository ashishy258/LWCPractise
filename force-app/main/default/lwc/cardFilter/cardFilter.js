import { LightningElement, wire } from 'lwc';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import { publish, MessageContext } from 'lightning/messageService';
import carFilterMessageChannel from '@salesforce/messageChannel/carFilter__c';
import CAR_OBJECT from '@salesforce/schema/Car__c';
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__c';
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c';

export default class CardFilter extends LightningElement {

    filterKey = {
        inputSearch:"",
        sliderSearch:999999,
        categoryCheckBox:[],
        makeCheckBox:[]
    }
    categoryOptions = [];
    makeOptions = [];

    @wire(MessageContext)
    messageContext;

    @wire(getObjectInfo, { objectApiName: CAR_OBJECT })
    recordTypeInfo;

    @wire(getPicklistValues, { recordTypeId: '$recordTypeInfo.data.defaultRecordTypeId', fieldApiName: CATEGORY_FIELD })
    categoryPicklist({data, error}){
        if (data) {
            this.categoryOptions = data.values;
            this.filterKey = {...this.filterKey, "categoryCheckBox":data.values.map(item =>(item.value))};
        }
        else if (error) {
            console.log(error);
        }
    }

    @wire(getPicklistValues, { recordTypeId: '$recordTypeInfo.data.defaultRecordTypeId', fieldApiName: MAKE_FIELD })
    makePicklist({data, error}){
        if (data) {
            this.makeOptions = data.values;
            this.filterKey = {...this.filterKey, "makeCheckBox":data.values.map(item =>(item.value))};
            console.log(this.filterKey);
        }
        else if (error) {
            console.log(error);
        }
    }

    inputChangeHandler(event){
        this.filterKey = {...this.filterKey, "inputSearch":event.target.value};
        this.handleFilterChange(this.filterKey);
    }

    sliderChangehandler(event){
        this.filterKey = {...this.filterKey, "sliderSearch":event.target.value};
        this.handleFilterChange(this.filterKey);
    }

    changeHandler(event){
        const {name, value} = event.target.dataset;
        if (name === "categoryPicklist") {
            if (event.target.checked) {
                this.filterKey = {...this.filterKey, "categoryCheckBox":[...this.filterKey.categoryCheckBox, event.target.dataset.value]};
            }
            else {
                this.filterKey = {...this.filterKey, "categoryCheckBox":[...this.filterKey.categoryCheckBox.filter(item => {return item !== event.target.dataset.value})]};
            }
        }
        else if (name === "makePicklist") {
            if (event.target.checked) {
                this.filterKey = {...this.filterKey, "makeCheckBox":[...this.filterKey.makeCheckBox, event.target.dataset.value]};
            }
            else {
                this.filterKey = {...this.filterKey, "makeCheckBox":[...this.filterKey.makeCheckBox.filter(item => {return item !== event.target.dataset.value})]};
            }
        }
        this.handleFilterChange(this.filterKey);
        console.log(this.filterKey);
    }

    handleFilterChange(data) {
        const payload = { filters: data };
        publish(this.messageContext, carFilterMessageChannel, payload);
    }
}
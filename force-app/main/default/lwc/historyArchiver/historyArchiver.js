import { LightningElement, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getFieldsMapOnObject from '@salesforce/apex/DynamicDataTable.getFieldsMapOnObjectList'
import getObjects from '@salesforce/apex/DynamicDataTable.getObjects'
import createArchiveData from '@salesforce/apex/DataArchiverController.createArchiveData'

export default class HistoryArchiver extends LightningElement {

    objectOptions = [];
    inputSelectedFields = '';
    @track objectFieldPill = [];
    objectFieldPillToSend = [];
    @track selectedFieldsOptions = [];
    selectedObjectValue = '';

    connectedCallback(){
        this.initData();
    }

    initData(){
        let objectItem = {};
        objectItem.index = 1;
        objectItem.objectName = '';
        objectItem.fieldsName = [];
        objectItem.pillsName = [];
        objectItem.selectAllFields = false;
        objectItem.isFieldDisabled = false;
        objectItem.showPills = false;
        objectItem.dataTillDate;
        this.objectFieldPill = [];
        this.objectFieldPill.push(objectItem);
        getObjects()
            .then(result => {
                this.objectOptions = result;
            })
            .catch(error =>{
                console.error(error);
            })
    }

    handleObjectChange(event){
        let obj = event.target.value;
        let index = event.target.dataset.id;
        for(let i = 0; i < this.objectFieldPill.length; i++) {
            if(this.objectFieldPill[i].index === parseInt(index)) {
                getFieldsMapOnObject({ objName: obj })
                .then((result) => {
                    this.objectFieldPill[i].objectName = obj;
                    this.objectFieldPill[i].fieldsName = result;
                })
                .catch((error) => {
                    console.log(error);
                });
                
            }
        }
        
    }

    handleFieldSelect(event){
        let fieldLabel = event.target.options.find(opt => opt.value === event.detail.value).label;
        let fieldName = event.target.value;
        let index = event.target.dataset.id;
        let pillValue = {};
        for(let i = 0; i < this.objectFieldPill.length; i++) {
            if(this.objectFieldPill[i].index === parseInt(index)) {
                pillValue.label = fieldLabel;
                pillValue.alternativeText = fieldName;
                this.objectFieldPill[i].pillsName.push(pillValue);
                this.objectFieldPill[i].showPills = true;
            }
        }
    }

    handleCheckboxChange(event){
        let index = event.target.dataset.id;
        for(let i = 0; i < this.objectFieldPill.length; i++) {
            if(this.objectFieldPill[i].index === parseInt(index)) {
                this.objectFieldPill[i].pillsName = [];
                this.objectFieldPill[i].selectAllFields = !this.objectFieldPill[i].selectAllFields;
                this.objectFieldPill[i].isFieldDisabled = !this.objectFieldPill[i].isFieldDisabled;
                this.objectFieldPill[i].showPills = !this.objectFieldPill[i].showPills;
                if(this.objectFieldPill[i].selectAllFields === true){
                    this.objectFieldPill[i].showPills = false;
                    this.objectFieldPill[i].pillsName = [];
                    this.objectFieldPill[i].fieldsName.forEach(element => {
                        let pillValue = {};
                        pillValue.label = element.label;
                        pillValue.alternativeText = element.value;
                        this.objectFieldPill[i].pillsName.push(pillValue);
                    });
                }
            }
        }
        console.log('herenew', JSON.parse(JSON.stringify(this.objectFieldPill)));
    }

    handleItemRemove(event){
        let innerIndex = event.detail.index;
        let index = event.target.dataset.id;
        for(let i = 0; i < this.objectFieldPill.length; i++) {
            if(this.objectFieldPill[i].index === parseInt(index)) {
                this.objectFieldPill[i].pillsName.splice(innerIndex, 1);
            }
        }
    }

    handleAddRow(){
        let objectItem = {};
        objectItem.index = this.objectFieldPill.length + 1;
        objectItem.objectName = '';
        objectItem.fieldsName = [];
        objectItem.pillsName = [];
        objectItem.selectAllFields = false;
        objectItem.isFieldDisabled = false;
        objectItem.showPills = false;
        objectItem.dataTillDate;
        this.objectFieldPill.push(objectItem);
    }

    handleDateChange(event){
        let index = event.target.dataset.id;
        let dt = event.target.value;
        console.log(dt);
        for(let i = 0; i < this.objectFieldPill.length; i++) {
            if(this.objectFieldPill[i].index === parseInt(index)) {
                this.objectFieldPill[i].dataTillDate = dt;
            }
        }
    }

    handleSave(){
        this.objectFieldPillToSend = [];
        this.objectFieldPill.forEach((element) => {
            let tempObj = {};
            let tempString = '';
            tempObj.ObjectName = element.objectName;
            tempObj.dataTillDate = element.dataTillDate;
            element.pillsName.forEach((pill) => {
                tempString = tempString + pill.alternativeText + ', ';
            });
            tempObj.objectFields = tempString.replace(/,\s*$/, "");
            this.objectFieldPillToSend.push(tempObj);
        });

        console.log('herenew', JSON.parse(JSON.stringify(this.objectFieldPillToSend)));
        createArchiveData({jsonRecordsString: JSON.stringify(this.objectFieldPillToSend)})
            .then(data => {
                console.log('data: ', JSON.parse(JSON.stringify(data)));
                console.log('url: ', window.location.origin + '/' + data[0].Id);
                this.initData();
                const evt = new ShowToastEvent({
                    title: 'Data Archive records successfully created',
                    variant: 'success',
                    message: "Hot Deal Record created! See it {0}!",
                    mode: 'sticky',
                    messageData: [
                        {url: window.location.origin + '/' + data[0].Id, label: 'here'}
                    ]
                });
                this.dispatchEvent(evt);
            })
            .catch(error => {
                console.log(error);
                const evt = new ShowToastEvent({
                title: 'Data Archive records creation fail',
                variant: 'error',
                });
                this.dispatchEvent(evt);
            });
    }
}
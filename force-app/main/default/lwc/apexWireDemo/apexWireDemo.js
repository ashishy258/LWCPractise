import { LightningElement, wire, api } from 'lwc';
import getAccountist from '@salesforce/apex/AccountController.getAccountist';
import updateAccounts from '@salesforce/apex/AccountController.updateAccounts';
import { getRecordNotifyChange } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';

const COLUMNS = [
    { label: 'Account Name', fieldName: 'Name', editable: true },
    { label: 'Type', fieldName: 'Type'},
    { label: 'Industry', fieldName: 'Industry'},
    { label: 'URLId', fieldName: 'urlId', type: 'url',
                                        typeAttributes:{
                                            label: {fieldName: 'Name'},
                                            target: '_blank'

                                        } },
];

export default class ApexWireDemo extends LightningElement {

    columns = COLUMNS;
    imperatively;
    wholeData = [];
    selectedValue = '';
    options = [];
    filteredData = [];
    filterBy = '';
    FilterOptions = [];
    inputValue = '';
    disableInputSearch = false;
    sortBy = 'Name';
    sortDirection = 'asc';
    sortingOptions = [];
    draftValues = [];
    @api recordId;



    @wire(getAccountist)
    wiredAccounts({ error, data }){
        if (data) {
            this.FilterOptions = [{'label':'--None--', 'value':'None'}, {'label':'ALL', 'value':'ALL'}, ...this.getFilterOptions(data)];
            this.sortingOptions = [...this.getFilterOptions(data)];
            this.options = [{label: 'ALL', value: ''}, ...data.typeFieldValues];
            this.wholeData = [...this.addURLFieldToData(data)];
            this.filteredData = [...this.sortByMethod(this.wholeData)];
        }

        else if (error) {
            console.log(error);
        }
    }

    getFilterOptions(data){
        const arrName = Object.keys(data.recordData[0]);
        return arrName.map(item =>{
            return {'label':item, 'value': item};
        })
    }

    addURLFieldToData(data){
        return data.recordData.map(item => ({...item, urlId: "/"+item.Id}));
    }

    handleTypeChange(event){
        this.filteredData = this.wholeData;
        this.selectedValue = event.target.value;

        this.filteredData = this.wholeData.filter(item => {
            if (!this.selectedValue) {
                return item;
            }
            else {
                return (item.Type === this.selectedValue);
            }
        });
        console.log(this.filteredData);
    }

    handleFilterChange(event){
        this.filterBy = event.target.value;
        if (this.filterBy === 'None') {
            this.disableInputSearch = true;
        }
        else {
            this.disableInputSearch = false;
        }
    }

    handleSearchChange(event){
        this.filteredData = this.wholeData;
        let searchTerm = event.target.value;
        if (searchTerm) {
            
                this.filteredData = this.wholeData.filter(eachRec => {
                    if (this.filterBy === 'ALL') {
                        return Object.keys(eachRec).some(key =>{
                            return eachRec[key].toLowerCase().includes(searchTerm.toLowerCase());
                        });
                    }
                    else {
                        return eachRec[this.filterBy].toLowerCase().includes(searchTerm.toLowerCase());
                    }
                }); 
        }
        else {
            this.filteredData = this.wholeData;
        }
    }

    handleSortChange(event){
        this.sortBy = event.target.value;
        this.filteredData = [...this.sortByMethod(this.wholeData)];
    }

    sortByMethod(data){
        const cloneData = [...data];
        cloneData.sort((a, b) => {
            if (a[this.sortBy] === b[this.sortBy]){
                return 0;
            }
            return this.sortDirection === 'desc' ?
            a[this.sortBy] > b[this.sortBy] ? -1:1 :
            a[this.sortBy] < b[this.sortBy] ? -1:1
        });
        return cloneData;
    }

    async handleSave(event) {
        const updatedFields = event.detail.draftValues;
        console.log('updatedFields: ', updatedFields);
        // Prepare the record IDs for getRecordNotifyChange()
        const notifyChangeIds = updatedFields.map(row => { return { "recordId": row.Id } });

        try {
            // Pass edited fields to the updateContacts Apex controller
            const result = await updateAccounts({data: updatedFields});
            console.log(JSON.stringify("Apex update result: "+ result));
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Accounts updated',
                    variant: 'success'
                })
            );

            // Refresh LDS cache and wires
            getRecordNotifyChange(notifyChangeIds);

             // Clear all draft values in the datatable
                this.draftValues = [];
                
            // Display fresh data in the datatable
            await refreshApex(this.wiredAccounts);
               
        }
        catch(error) {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error updating or refreshing records',
                    message: error.body.message,
                    variant: 'error'
                })
            );
        };
    }
}
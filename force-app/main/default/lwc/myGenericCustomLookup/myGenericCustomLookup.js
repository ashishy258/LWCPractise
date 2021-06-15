import { LightningElement, api, wire } from 'lwc';
import getAllRecords from '@salesforce/apex/LwcLookupController.getAllRecords';
// Second method in upeer apex class is yet not getting used as its not needed here but in some other case where records are large in numbers.

export default class MyGenericCustomLookup extends LightningElement {

    @api lookupLabel;
    @api customObjectApiName;
    @api objectApiName; // can't use this as a parameter in getAllRecords Apex method as this is getting set from record page automatically e.g. recordId
    @api keyFieldAPI;
    @api searchField;
    @api isRequired;
    @api predefinedId;
    @api selectedRecordId;

    allRecords = [];
    filteredRecords = [];
    selectedRec;
    showData = false;
    timer;

    connectedCallback(){
        getAllRecords({objectName: this.customObjectApiName, column: this.searchField, keyFieldAPI: this.keyFieldAPI, selectedRecordId: this.predefinedId})
            .then(result => {
                if (this.predefinedId) {
                    this.selectedRec = result[0];
                }
                else {
                    this.allRecords = result;
                    this.filteredRecords = result;
                }
            })
            .catch(error =>{
                console.error(error);
            })
    }

    removeSelection(){
        this.showData = true;
        this.predefinedId = '';
        this.selectedRec = '';
        getAllRecords({objectName: this.customObjectApiName, column: this.searchField, keyFieldAPI: this.keyFieldAPI, selectedRecordId: this.predefinedId})
            .then(result => {
               
                this.allRecords = result;
                this.filteredRecords = result;
            })
            .catch(error =>{
                console.error(error);
            })
    }

    handleSelect(event){
        const {key, name} = event.target.dataset;
        if (key !== undefined && name !== undefined) {
            this.selectedRec = {Name: name, Id: key};
            const selectedEvent = new CustomEvent('selected', { detail: this.selectedRec.Id });
            this.dispatchEvent(selectedEvent);
        }
    }

    handleInputChange(event){

        const searchTerm = event.target.value;
        console.log(event.target.value);
        this.filteredRecords = this.allRecords.filter(item => {
            return item.Name.toLowerCase().includes(searchTerm.toLowerCase());
        });
    }

    inputFocus(){
        this.showData = true;
    }

    // removeFocus(){
    //     console.log(this.selectedRec);
    //     this.showData = false;
    // }
}
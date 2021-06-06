import { LightningElement, api } from 'lwc';

export default class Pagination extends LightningElement {

    totalRecords;
    recordSize = 15;
    visibleRecords;
    totalPage;
    @api currentPage=1;
    @api
    get records(){
        return this.visibleRecords;
    }
    set records(data){
        if(data){
            this.totalRecords = data;
            
            this.totalPage = Math.ceil(data.length/this.recordSize);  
            this.updateRecords();  
        }
        
    }

    get disablePrev(){ 
        return this.currentPage <=1;
    }
    get disableNext(){ 
        return this.currentPage>=this.totalPage;
    }
    previousHandler(){
        if(this.currentPage >1){ 
            this.currentPage--;
            this.updateRecords();
        }
    }
    nextHandler(){
        if(this.currentPage < this.totalPage){ 
            this.currentPage++;
            this.updateRecords();
        }
    }
    updateRecords(){
        const start = (this.currentPage-1)*this.recordSize;
        const end = (this.currentPage)*this.recordSize;
        this.visibleRecords = this.totalRecords.slice(start,end);
        this.dispatchEvent(new CustomEvent('update',{
            detail:{
                records:this.visibleRecords,
                cpage:this.currentPage
                
            }
        }))
    }
}
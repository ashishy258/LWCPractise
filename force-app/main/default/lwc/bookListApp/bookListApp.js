import { LightningElement } from 'lwc';
const BOOK_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export default class BookListApp extends LightningElement {
    query = 'Man';
    isLoading = true;
    isData = false;
    finalItems;
    timer;
    connectedCallback(){
        this.callBookAPI();
    }

    callBookAPI(){
        fetch(BOOK_URL+this.query)
        .then(response => response.json())
        .then(data => {
            this.isLoading = false;
            this.isData = true;
            this.finalItems = data.items;
            console.log(this.finalItems);
            console.log(this.isLodaing);
        })
        .catch(error => {

            console.log(error)
        });
    }

    handleSearch(event){
        window.clearInterval(this.timer);
        if(event.which == 13){
            this.isLoading = true;
            this.isData = false;
            this.query = event.target.value;
            
            this.timer = setInterval(() => {
                this.callBookAPI();
            }, 3000);
            
        }
    }
}
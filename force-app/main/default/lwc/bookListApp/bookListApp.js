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
    newDevelopment = [
        {
            name: 'Miss Scarlet',
            present: true,
            rooms: [
                {kitchen: false},
                {ballroom: false},
                {conservatory: true},
                {'dining room': true},
                {'billiard room': false},
                {library: true}
            ]
        },
        {
            name: 'Reverend Green',
            present: true,
            rooms: [
                {kitchen: true},
                {ballroom: false},
                {conservatory: false},
                {'dining room': false},
                {'billiard room': true},
                {library: false}
            ]
        },
        {
            name: 'Colonel Mustard',
            present: true,
            rooms: [
                {kitchen: false},
                {ballroom: false},
                {conservatory: true},
                {'dining room': false},
                {'billiard room': true},
                {library: false}
            ]
        },
        {
            name: 'Professor Plum',
            present: true,
            rooms: [
                {kitchen: true},
                {ballroom: false},
                {conservatory: false},
                {'dining room': true},
                {'billiard room': false},
                {library: false}
            ]
        }
    ];
    // returnList = [ {name:'scarlet', room:'kitchen'},
    //                 {name:'scarlet', room:'kitchen'}
    //                 ];

    
    
}
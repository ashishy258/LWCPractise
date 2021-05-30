import { LightningElement } from 'lwc';
import fontAwesome from '@salesforce/resourceUrl/fontAwesome';
import { loadStyle } from 'lightning/platformResourceLoader';


export default class MemoryGame extends LightningElement {

    isLibLoaded = false;
    totalMoves = 5;
    move = 0;
    totalScore = 0;
    clickCards = [];

    cards= [
        {id:1, listClass:"card", type:'diamond', icon:'fa fa-diamond fa-lg'},
        {id:2, listClass:"card", type:'plane', icon:'fa fa-paper-plane-o fa-lg'},
        {id:3, listClass:"card", type:'anchor', icon:'fa fa-anchor fa-lg'},
        {id:4, listClass:"card", type:'bolt', icon:'fa fa-bolt fa-lg'},
        {id:5, listClass:"card", type:'cube', icon:'fa fa-cube fa-lg'},
        {id:6, listClass:"card", type:'anchor', icon:'fa fa-anchor fa-lg'},
        {id:7, listClass:"card", type:'leaf', icon:'fa fa-leaf fa-lg'},
        {id:8, listClass:"card", type:'bicycle', icon:'fa fa-bicycle fa-lg'},
        {id:9, listClass:"card", type:'diamond', icon:'fa fa-diamond fa-lg'},
        {id:10, listClass:"card", type:'bomb', icon:'fa fa-bomb fa-lg'},
        {id:11, listClass:"card", type:'leaf', icon:'fa fa-leaf fa-lg'},
        {id:12, listClass:"card", type:'bomb', icon:'fa fa-bomb fa-lg'},
        {id:13, listClass:"card", type:'bolt', icon:'fa fa-bolt fa-lg'},
        {id:14, listClass:"card", type:'bicycle', icon:'fa fa-bicycle fa-lg'},
        {id:15, listClass:"card", type:'plane', icon:'fa fa-paper-plane-o fa-lg'},
        {id:16, listClass:"card", type:'cube', icon:'fa fa-cube fa-lg'},
      ]

    renderedCallback(){
        if(this.isLibLoaded){
            return
        }
        else{
            loadStyle( this, fontAwesome + '/fontawesome/css/font-awesome.min.css')
            .then(()=>{
                console.log("success!!!!");
            }).catch(error =>{
                console.log("error");
            })
            this.isLibLoaded = true;
        }
        
    }
    
    displayCard(event){
        let curTarget = event.target.type;
        curTarget.classList.add("show");
        this.clickCards = this.clickCards.concat(curTarget);
        console.log(curTarget);
    }
}
import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    
    obtainScore = 0;
    totalScore = 0;
    submitButtonPressed = false;
    selectedAnswers = {};
    myQuestions = [
        {
            id:"question1",
            question:"what is my age?",
            options:{
                a:21,
                b:22,
                c:23
            },
            answer:"c"  
        },
        {
            id:"question2",
            question:"what is my name?",
            options:{
                a:"ashish",
                b:"notAshish",
                c:"dontKnow"
            },
            answer:"a"  
        },
        {
            id:"question3",
            question:"what I love to eat?",
            options:{
                a:"everything",
                b:"notEverything",
                c:"dontKnow"
            },
            answer:"b"  
        }
    ];

    get notAllSelected(){
        return !(Object.keys(this.selectedAnswers).length === this.myQuestions.length);
    }
    
    get finalText(){
        return `slds-text-heading_medium ${this.obtainScore === this.myQuestions.lengrh ? 'slds-text-color_success': 'slds-text-color_error'}`;
    }

    changeHandler(event){
        let name = event.target.name;
        let value = event.target.value;
        this.selectedAnswers = {...this.selectedAnswers, [name]:value}
      
    }

    handleSubmit(){
        this.submitButtonPressed = true;
        this.totalScore = this.myQuestions.length;
        const finalScoreArr = this.myQuestions.filter(item => {
            return (item.answer === this.selectedAnswers[item.id])
        })
        this.obtainScore = finalScoreArr.length;
        console.log(this.obtainScore);
        console.log(this.myQuestions.length === this.obtainScore);
    }

    handleReset(){
        this.submitButtonPressed = false;
        this.selectedAnswers = {};
        this.totalScore = 0;
        this.obtainScore = 0;
        this.template.querySelector('form').reset();
    }
}
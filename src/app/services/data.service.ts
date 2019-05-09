import { Injectable } from '@angular/core';
import { Question } from '../models/Question';
import { element } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  questions:Question[];

  constructor() {
    /*
    this.questions = [
      {
        text: 'What is your name ?',
        answer: 'My name is Imed ..',
        hide: true
      },      
      {
        text: 'What is your favorite color ?',
        answer: 'My favorite color is blue ..',
        hide: true
      },
      {
        text: 'What is your favorite language ?',
        answer: 'My favorite language is JavaScript ..',
        hide: true
      },
    ]
    */
  }


  // Get Questions from LS
  getQuestions(){
    if(localStorage.getItem('questions') === null ){
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

  // Add Questions from LS .. 
  addQuestion(question:Question){
    this.questions.unshift(question);

    // init local var 
    let questions ; 

    if(localStorage.getItem('questions') === null) {
      questions = [] ;
      // Push new question .. 
      questions.unshift(question);
      // Set new array to LS
      localStorage.setItem('questions',JSON.stringify(questions));
    } else {
      // fetch the data ..
      questions = JSON.parse(localStorage.getItem('questions'));

      // add new question ..
      questions.unshift(question);

      // Reset LS
      localStorage.setItem('questions',JSON.stringify(questions));
    }
  }

  // Remove Questions from LS .. 
  removeQuestion(question){
    this.questions.forEach( (element , index) =>{
      if (element == question){
        this.questions.splice(index,1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      } 
    });

  }
}

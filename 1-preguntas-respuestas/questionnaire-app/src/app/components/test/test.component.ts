import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public question: string;
  public answers: any[];

  public answerCorrect: boolean;
  public answerChosen: boolean;
  
  constructor() { 
    this.question = '¿Cuál es la capital de España?';
    this.answers = [
      {
        'answer': 'Zaragoza',
        'correct': true
      },
      {
        'answer': 'Barcelona',
        'correct': false
      },
      {
        'answer': 'Madrid',
        'correct': true
      },
      {
        'answer': 'Sevilla',
        'correct': false
      },
    ];
    this.answerChosen = false; 
    this.answerCorrect = false; 
  }
  
  ngOnInit() {
  }

  checkAnswerUsingIndex(index: string | number) {
    this.answerChosen = true;
    const answer = this.answers[index].answer;
    this.answerCorrect = this.answers[index].correct;
    console.log(`Tu selección de ${answer} como capital de España es: ${this.answerCorrect?'CORRECTO':'ERROR'}`);
  }

  checkAnswerUsingObj(obj) {
    this.answerChosen = true;
    const answer = obj.answer;
    this.answerCorrect = obj.correct;
    console.log(`Tu selección de ${answer} como capital de España es: ${this.answerCorrect?'CORRECTO':'ERROR'}`);
  }

  checkAnswersQuestion() {
    if(!this.question) {
      return false;
    }

    if(this.answers || !Array.isArray(this.answers)) {
      return false;
    } else {

      if (!(this.answers.length >= 2 && this.answers.length <= 4)) {
        return false;
      }

      const correctAnswers = this.answers.filter(answer => answer.correct)
      if (correctAnswers.length !== 1) {
        return false;
      }
    }
    return true;
  }
}

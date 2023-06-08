import { Component } from '@angular/core';
import { Question } from './models/question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Quiz Game';
  questionOne: Question = {
    question: 'Who was the first president of the United States?',
    answer: 'George Washington',
    incorrectAnswers: ['Abraham Lincoln', 'John Adams', 'Thomas Jefferson'],
  }
  questionTwo: Question = {
    question: 'What year was the Declaration of Independence signed?',
    answer: 1776,
    incorrectAnswers: [1774, 1788, 1812],
  }
  questionThree: Question = {
    question: 'What country gifted the United States with the Statue of Liberty?',
    answer: 'France',
    incorrectAnswers: ['England', 'Mexico', 'Spain'],
  }

  questions = [this.questionOne, this.questionTwo, this.questionThree];

  currentQuestionIndex: number = 0;
  showResult: boolean = false;
  totalCorrect: number = 0;

  handleAnswerSelected(isCorrect: boolean) {
    if (isCorrect) this.totalCorrect++;
    this.showResult = true;
  }

  goToNextQuestion() {
    this.currentQuestionIndex++;
    this.showResult = false;
  }

  isLastQuestion() {
    return this.currentQuestionIndex === this.questions.length - 1;
  }
}

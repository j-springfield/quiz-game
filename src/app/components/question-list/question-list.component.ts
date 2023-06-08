import { Component } from '@angular/core';
import { Question } from '../../models/question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent {
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
}

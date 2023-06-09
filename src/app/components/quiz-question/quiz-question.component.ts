import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/question';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent {
  @Input() question: Question;
  @Input() choices: any [];
  @Input() isLastQuestion: boolean;
  @Output() answerSelected = new EventEmitter<number>();
  @Output() nextQuestion = new EventEmitter<void>();
  selectedAnswerIndex: number = -1;
  showResult: boolean;
  result: string;

  ngOnChanges() {
    this.randomizeAnswers();
  }

  selectAnswer(index: number) {
    this.selectedAnswerIndex = index;
  }

  submitAnswer() {
    this.showResult = true;
    if (this.selectedAnswerIndex !== -1) {
      const selectedAnswer = this.choices[this.selectedAnswerIndex];
      const isCorrect = selectedAnswer === this.question.answer;
      if (isCorrect) {
        this.result = 'Correct!';
      } else {
        this.result = 'Wrong!';
      }
      this.answerSelected.emit(isCorrect ? 1 : 0);
    }
  }

  goToNextQuestion() {
    this.showResult = false;
    this.selectedAnswerIndex = -1;
    this.nextQuestion.emit();
  }

  randomizeAnswers(): void {
    console.log(this.question)
    let answers: any [] = this.question.incorrectAnswers;
    answers.push(this.question.answer)
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    this.choices = answers;
  }
}

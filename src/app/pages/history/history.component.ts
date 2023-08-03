import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Question } from '../../models/question';
import { QuestionService } from '../../service/question.service';
import { incrementScore, resetScore } from 'src/app/actions/score.actions';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  title = 'Quiz Game';

  questions: Question [];
  isLoading: boolean = true;
  currentQuestionIndex: number = 0;
  showResult: boolean = false;
  totalCorrect: number = 0;
  score$: Observable<number>

  constructor(
    private questionService: QuestionService,
    private store: Store<{ score: number }>
  ) {
    // TODO: Connect 'this.score$' stream to the current store 'score' state
    this.score$ = store.select('score')
  }

  ngOnInit(): void {
    this.questions = this.getFormattedQuestionData()
  }

  // getQuizData() {
  //   this.questions = this.questionService.getFormattedQuestionData();
  // }

  incrementScore() {
    // TODO: Dispatch an increment score action
    this.store.dispatch(incrementScore());
  }

  resetScore() {
    // TODO: Dispatch a reset score action
  }

  getFormattedQuestionData(): Array<Question> {
    let questions: Array<Question> = new Array<Question>;
    this.questionService.getQuestionData().subscribe(
      (data: any) => {
        if (data.results) {
          this.isLoading = false;
          data.results.map((result: { question: string; correct_answer: any; incorrect_answers: any[]; }) => {
            let question: Question = {
              question: '',
              answer: null,
              incorrectAnswers: []
            };
            question.question = result.question;
            question.answer = result.correct_answer;
            question.incorrectAnswers = result.incorrect_answers;
            questions.push(question);
          });
        }
      },
      (error) => {
        console.error('Failed to fetch quiz data: ', error);
      }
    );
    return questions;
  }

  handleAnswerSelected(result: number) {
    if (result === 1) {
      this.totalCorrect++;
      this.incrementScore();
    }
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

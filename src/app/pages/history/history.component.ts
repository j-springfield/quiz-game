import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/question';
import { QuestionService } from '../../service/question.service';

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

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.questions = this.getFormattedQuestionData()
  }

  // getQuizData() {
  //   this.questions = this.questionService.getFormattedQuestionData();
  // }

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
    if (result === 1) this.totalCorrect++;
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

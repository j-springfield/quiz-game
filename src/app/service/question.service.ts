import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getQuestionData(): Observable<any> {
    return this.http.get<any>('https://opentdb.com/api.php?amount=10&category=23')
  }
}

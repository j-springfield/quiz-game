import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';

import { scoreReducer } from './reducers/score.reducer';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { QuizQuestionComponent } from './components/quiz-question/quiz-question.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { HistoryComponent } from './pages/history/history.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    QuizQuestionComponent,
    QuestionListComponent,
    HistoryComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ score: scoreReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

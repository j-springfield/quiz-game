import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { QuizQuestionComponent } from './components/quiz-question/quiz-question.component';
import { QuestionListComponent } from './components/question-list/question-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    QuizQuestionComponent,
    QuestionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

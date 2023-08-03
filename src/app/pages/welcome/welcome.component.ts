import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../reducers/app.reducer';
import { addFirstName, addLastName, addEmail } from '../../actions/user.actions';
import { UserState } from '../../models/user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  user: UserState = {
    firstName: '',
    lastName: '',
    email: '',
  };
  submittedUser: UserState;
  isSubmitted: boolean;

  constructor(private store: Store<AppState>) {
    this.isSubmitted = false;
    this.store.select('user').subscribe((userState) => {
      this.submittedUser = userState;
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log('First name: ', this.user.firstName);
    console.log('Last name: ', this.user.lastName);
    console.log('Email: ', this.user.email);

    this.store.dispatch(addFirstName({ firstName: this.user.firstName }));
    this.store.dispatch(addLastName({ lastName: this.user.lastName }));
    this.store.dispatch(addEmail({ email: this.user.email }));

    console.log(this.submittedUser);
  }
}

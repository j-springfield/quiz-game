import { createReducer, on, Action } from '@ngrx/store';
import { UserState } from '../models/user';
import { addFirstName, addLastName, addEmail } from '../actions/user.actions';

export const initialState: UserState = {
    firstName: '',
    lastName: '',
    email: ''
};

export const userReducer = createReducer(
    initialState,
    on(addFirstName, (state, { firstName }) => ({ ...state, firstName })),
    on(addLastName, (state, { lastName }) => ({ ...state, lastName})),
    on(addEmail, (state, { email }) => ({ ...state, email })),
)

export function reducer(state: UserState | undefined, action: Action) {
    return userReducer(state, action);
}
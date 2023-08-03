import { ActionReducerMap } from '@ngrx/store';
import { UserState } from '../models/user';
import { reducer as userReducer } from './user.reducer';
import { reducer as scoreReducer } from './score.reducer';

export interface AppState {
    user: UserState;
    score: number;
}

export const reducers: ActionReducerMap<AppState> = {
    user: userReducer,
    score: scoreReducer,
}
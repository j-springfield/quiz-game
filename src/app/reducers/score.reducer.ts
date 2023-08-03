import { createReducer, on, Action } from '@ngrx/store';
import { incrementScore, resetScore } from '../actions/score.actions';

export const initialState = 0;

export const scoreReducer = createReducer(
    initialState,
    on(incrementScore, (state) => state + 1),
    on(resetScore, (state) => 0)
)

export function reducer(state: number | undefined, action: Action) {
    return scoreReducer(state, action);
}
import { createAction, props } from "@ngrx/store";

export const addFirstName = createAction('[User Component] Add First Name', props<{ firstName: string }>());
export const addLastName = createAction('[User Component] Add Last Name', props<{ lastName: string }>());
export const addEmail = createAction('[User Component] Add Email', props<{ email: string }>());
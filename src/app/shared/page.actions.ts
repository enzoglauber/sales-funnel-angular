import { Action } from '@ngrx/store';

export const CREATE_PAGE = 'CREATE_PAGE';

export class CreatePage implements Action {
    readonly type = CREATE_PAGE;
    constructor(public payload: any) { }
}

export type Actions = CreatePage ;

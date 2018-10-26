import { Action } from '@ngrx/store';
import { Stage } from '../stages/stage.model';

export const CREATE_STAGE = 'Stage_Create';
export const DELETE_STAGE = 'Stage_Delete';

export class CreateStage implements Action {
    readonly type = CREATE_STAGE;
    constructor(public payload: Stage) { }
}

export class DeleteStage implements Action {
    readonly type = DELETE_STAGE;
    constructor(public id: string) { }
}

export type Actions = CreateStage | DeleteStage;

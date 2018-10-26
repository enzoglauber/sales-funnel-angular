import { Stage } from './stages/stage.model';

export interface AppState {
    readonly stage: Stage[];
    readonly page: any;
}

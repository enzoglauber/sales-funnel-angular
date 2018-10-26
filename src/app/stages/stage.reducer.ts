import { Stage } from '../stages/stage.model';
import { Actions, CREATE_STAGE, DELETE_STAGE } from './stage.actions';

const initialState: Stage = {
    id: '1',
    name: 'Andrien',
    opportunities:[]
};

export function StageReducer (
    state: Stage[] = [initialState],
    action: Actions
) {
    switch (action.type) {
        case CREATE_STAGE:
            return [...state, action.payload];

        case DELETE_STAGE:
            return state.filter(({ id }) => id !== action.id);

        default:
            return state;
    }
}

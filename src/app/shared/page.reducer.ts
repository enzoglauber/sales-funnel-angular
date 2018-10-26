import { Actions, CREATE_PAGE } from './page.actions';

const init: any = false;

export function PageReducer (
    state: any = init,
    action: Actions
) {
    switch (action.type) {
        case CREATE_PAGE:
            return [...state, action.payload];

        default:
            return state;
    }
}

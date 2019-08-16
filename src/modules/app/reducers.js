import * as moduleActions from "./actions";

const initialState = {
    test: '0'
}

export function app (state = initialState, action) {
    switch (action.type) {
        case moduleActions.SIMPLE_ACTION:
            return {
                ...state,
                test: '1'
            }
        default:
            return state
    }
}
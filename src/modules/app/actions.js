export const SIMPLE_ACTION = "SIMPLE_ACTION";

export function simpleAction() {
    return{
        type: 'SIMPLE_ACTION',
        payload: 'result_of_simple_action'
    }
}
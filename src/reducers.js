/**
 * Import module reducers
 */
import { app } from "./modules/app/reducers";

import { combineReducers } from 'redux';
export default combineReducers({
    app
});
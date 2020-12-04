import { combineReducers } from 'redux';
import {notesReducer} from './notes';
// import {loaderReducer} from './loader';

export const rootReducer = combineReducers({
    notes: notesReducer,
    // isLoader: loaderReducer,
});
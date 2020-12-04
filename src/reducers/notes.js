import {ADD_NOTE, EDIT_NOTE, DELETE_NOTE, LOAD_NOTE_LIST} from '../actions/constants';
import {Map} from 'immutable';


export const notesReducer = (state = Map({}), action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_NOTE: {
            return state.set(payload.id, payload);
        }
        case EDIT_NOTE:{
            return state.set(payload.noteId, payload);
        }
        case DELETE_NOTE: {
            const notes = state.delete(payload.noteId);
            return notes;
        } 
        case LOAD_NOTE_LIST : {
            return [...state];
        }
        default:
            return state;
    }
}
import {
    ADD_NOTE, 
    EDIT_NOTE,
    DELETE_NOTE,
    LOAD_NOTE_LIST,
    IS_LOADER,
    IS_NOT_LOADER,
} from './constants';

import {getLocalData, setLoalData} from '../utils/common';

export const addNote = ({ title }) => (dispatch, select) => {
    const store = select();
    const id = String(store.notes.count() + 1);
    // setLoalData('notesList', [...store.notes, note]);
    dispatch({type: ADD_NOTE, payload: { title, id, lastEditTime: Date.now() }});
}

export const editNote = (note) => (dispatch) => {
    dispatch({type: EDIT_NOTE, payload: { ...note, lastEditTime: Date.now() }});
}

export const deleteNote = ({noteId}) => (dispatch) => {
    dispatch({type: DELETE_NOTE, payload: { noteId }})
}

export const loadAllNotesFromLoacalstore = () => (dispatch) => {
    const notes = getLocalData('notesList', ) || [];
    dispatch({type: LOAD_NOTE_LIST, payload: { notes }});
    dispatch({type: IS_NOT_LOADER});
}

export const startLoader = () => dispatch => dispatch({type: IS_LOADER});
export const endLoader = () => dispatch => dispatch({type: IS_NOT_LOADER})



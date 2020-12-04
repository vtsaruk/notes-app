import { createSelector } from 'reselect';

const getterNotes = (state) => state.notes;

export const getNotesIds = createSelector(
    getterNotes,
    (notes) => notes.keySeq().toArray()
);
export const getNoteById = createSelector(
    getterNotes,
    (state, articleId) => Number(articleId),
    (list, id) =>  list.find(_ => _.id === id) || {}
);
export const getTitleNoteFactory = () => createSelector(
    getterNotes,
    (state, noteId) => noteId,
    (notes, noteId) =>  (notes.get(noteId) || {}).title || '',
);
export const getTitleNote = createSelector(
    getterNotes,
    (state, noteId) => noteId,
    (notes, noteId) =>  (notes.get(noteId) || {}).title || '',
);
export const getContentNote = createSelector(
    getterNotes,
    (state, noteId) => noteId,
    (notes, noteId) =>  (notes.get(noteId) || {}).content || '',
);
export const getLastEditTime = createSelector(
    getterNotes,
    (state, noteId) => noteId,
    (notes, noteId) =>  (notes.get(noteId) || {}).lastEditTime || '',
);


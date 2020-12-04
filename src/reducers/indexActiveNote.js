import {CHANGE_INDEX_ACTIVE_NOTE} from '../actions/constants';



export const notesReducer = (state = null, action) => {
    const {type, payload} = action;
    switch (type) {
        case CHANGE_INDEX_ACTIVE_NOTE: {
           
            return payload.activeIndex;
        }
        default:
            return state;
    }
}
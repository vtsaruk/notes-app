import {IS_LOADER, IS_NOT_LOADER} from '../actions/constants';

export const loaderReducer = (state = true, action) => {
    const {type} = action;
    switch (type) {
        case IS_LOADER: {
            return true;
        }
        case IS_NOT_LOADER:{
            return false;
        }
        default:
            return state;
    }
}
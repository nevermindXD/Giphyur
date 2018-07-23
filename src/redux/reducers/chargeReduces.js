import { SET_CHARGE, GET_CHARGE } from '../actions/actionTypes';

const INITIAL_STATE = {
    charge:false
}

export default function (state = INITIAL_STATE, action) {

    const { type, payload } = action
    switch (type) {
        case GET_CHARGE:
            return state;
        case SET_CHARGE:
            return payload;
        default:
            return state;
    }
    
}
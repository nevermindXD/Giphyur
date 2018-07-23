import { GET_HEIGHT_NAVBAR, CHANGE_HEIGHT_NAVBAR } from '../actions/actionTypes';

const INITIAL_STATE = {
    heightNavbar:''
}

export default function (state = INITIAL_STATE, action) {

    const { type, payload } = action
    switch (type) {
        case GET_HEIGHT_NAVBAR:
            return state;
        case CHANGE_HEIGHT_NAVBAR:
            return payload;
        default:
            return state;
    }
    
}
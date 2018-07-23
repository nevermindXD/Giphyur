import { GET_PRESENTATION,CHANGE_PRESENTATION } from '../actions/actionTypes';

const INITIAL_STATE = {
    waterfall:true
}

export default function (state = INITIAL_STATE, action) {

    const { type, payload } = action
    switch (type) {
        case GET_PRESENTATION:
            return state;
        case CHANGE_PRESENTATION:
            return payload;
        default:
            return state;
    }
    
}
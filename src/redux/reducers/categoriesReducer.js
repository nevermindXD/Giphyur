import { FETCH_CATEGORIES} from '../actions/actionTypes';


const INITIAL_STATE = {
    categories:[
    ]
}

export default function (state = INITIAL_STATE, action) {

    const { type, payload } = action
    switch (type) {
        case FETCH_CATEGORIES:
            return [
                ...payload
            ]
        default:
            return state;
    }
    
}
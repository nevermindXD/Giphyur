import { FETCH_RANDOM_GIFS, FETCH_SEARCH_GIFS} from '../actions/actionTypes';

const INITIAL_STATE = {
    cards:[
    ]
}

export default function (state = INITIAL_STATE, action) {

    const { type, payload } = action
    switch (type) {
        case FETCH_RANDOM_GIFS:
            return [...state,...action.cards];
        case FETCH_SEARCH_GIFS:
            return [
                ...payload
            ]
        default:
            return state;
    }
    
}
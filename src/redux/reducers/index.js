import { combineReducers } from 'redux';
import cardReducer from './cardReducer';
import categoriesReducer from './categoriesReducer';
import waterfallReducer from './waterfallReducer';
import heightReducer from './heightReducer';


/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */
const rootReducer = () => combineReducers({
    cardReducer,
    categoriesReducer,
    waterfallReducer,
    heightReducer
});

export default rootReducer;
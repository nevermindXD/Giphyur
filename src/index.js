
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './redux/store';

const store = configureStore();
console.log(store.getState());
ReactDOM.render(
    <Root store={store}/>, document.getElementById('root')
)
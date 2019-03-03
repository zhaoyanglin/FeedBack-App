import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feedBack = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
}
const mainReducer = (state = feedBack, action) => {
    if (action.type === 'SET_FEELING') {
        return {...state, feeling:action.payload}
    }
    if (action.type === 'SET_UNDERSTANDING') {
        return { ...state, understanding: action.payload }
    }
    if (action.type === 'SET_SUPPORT') {
        return { ...state, support: action.payload }
    }
    if (action.type === 'SET_COMMENTS') {
        return { ...state, comments: action.payload }
    }
    return state;
};

const storeInstance = createStore(
    combineReducers({
        mainReducer
    }),
    applyMiddleware(logger),
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));


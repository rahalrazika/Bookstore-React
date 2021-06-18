import { combineReducers } from 'redux';
import bookReducer from './books';

const rootReducer = combineReducers({ bookReducer });

export default rootReducer;

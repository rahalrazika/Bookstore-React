import { combineReducers } from 'redux';
import bookReducer from './books';
import filterReducer from './filter';

const rootReducer = combineReducers({ bookReducer, filterReducer });

export default rootReducer;

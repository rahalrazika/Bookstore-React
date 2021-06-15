import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './style/index.css';
import App from './components/App';
import bookReducer from './reducers/books';

const initialState = [
  { id: Math.random(), title: 'The Call of the Wild', category: 'Action' },
  { id: Math.random(), title: 'To Kill a Mockingbird', category: 'Biography' },
  { id: Math.random(), title: 'And Then There Were None', category: 'History' },
  { id: Math.random(), title: 'Ninth House', category: 'Horror' },
  { id: Math.random(), title: 'Clean Code', category: 'Learning' },

];
const store = createStore(bookReducer, initialState);
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

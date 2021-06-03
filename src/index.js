import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap'
import '../node_modules/jquery/dist/jquery'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { createStore,applyMiddleware } from 'redux';
import { appstate } from './Redux/Reducers/combine';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { callPeopleApi } from './Redux/Actions/PeopleActions';

const mystore=createStore(appstate,applyMiddleware(thunk))
mystore.dispatch(callPeopleApi())
ReactDOM.render(
  <Provider store={mystore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

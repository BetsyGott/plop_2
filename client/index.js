import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {browserHistory, Router} from 'react-router';
export const GAPI_KEY = process.env.GAPI_KEY;
import routes from './routes';

const render = Component => {
  ReactDOM.render(
      <Router history={browserHistory} routes={routes}/>,
      document.getElementById('root'));
};

render(App);

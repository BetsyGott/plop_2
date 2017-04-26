import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducers';
import ToDo from './components/ToDo';

let store = createStore(todoApp);

export class ToDoDemo extends Component {
  render() {
    return(
      <Provider store={store}>
        <ToDo/>
      </Provider>
    );
  }
}

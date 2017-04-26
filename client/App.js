import React, {Component} from 'react';
import {Router} from 'react-router';

export class App extends Component {

  render() {
    return (
        <div>
            <h2>This is the main app</h2>
            {this.props.children}
        </div>
    );
  }
}



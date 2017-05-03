import React, {Component} from 'react';
import 'App.css';
import GAPI_KEY from './index.js';
import {Map} from './Map'
// import 'font-awesome/css/font-awesome.css';

export class MapContainer extends Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    };

    return (
        <div style={style}>
          <Map google={this.props.google}/>
        </div>
    )

  }
}
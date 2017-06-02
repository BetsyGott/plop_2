import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Menu, Icon } from 'semantic-ui-react';

import styles from './App.css';
import GoogleMap from './Map';


export class MapContainer extends Component {
  render() {
    return (
      <div>
        <Menu fixed="top" vertical sticky className={`${styles.sideMenu}`}>
          <Menu.Item name='editorials'>
            Editorials
          </Menu.Item>
        </Menu>
        <GoogleMap/>
      </div>
    )
  }
}

export default MapContainer;
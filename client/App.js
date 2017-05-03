import React, {Component} from 'react';
import {Router, Link} from 'react-router';
import styles from './App.css';

export class App extends Component {

  render() {
    return (
        <div>
          <div className="ui top attached menu">
            <Link to="/">
              <div className="item">
                <img src={require('assets/water.png')}/>
              </div>
            </Link>
            <div className="item">
              <div className="ui primary button">
                <Link to="/review"><span className={styles.headerlink}>Write a Review</span></Link>
              </div>
            </div>
            <div className="right header item"> Plop </div>
          </div>
            {this.props.children}
        </div>
    );
  }
}



import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

const K_WIDTH = 40;
const K_HEIGHT = 40;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '5px solid #f44336',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};

const divSize = {
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '1',
  width: '100vw',
  height: '100vh'
};

class MyGreatPlace extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  render() {
    return (
        <div style={greatPlaceStyle}>
          {this.props.text}
        </div>
    );
  }
}

class GoogleMap extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  };

  static defaultProps = {
    center: [33.6361492, -117.739616],
    zoom: 18,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div style={divSize}>
          <GoogleMapReact
              bootstrapURLKeys={{key: process.env.GAPI_KEY}}
              center={this.props.center}
              zoom={this.props.zoom}>
            <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'}/>
            <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'}/>
          </GoogleMapReact>
        </div>



    );
  }
}

export default GoogleMap;

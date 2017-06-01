import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import testData from '../server/routes/places.json';

const divSize = {
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '1',
  width: '100vw',
  height: '100vh'
};

class GoogleMap extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  };

  //defaults to Irvine Spectrum Center
  static defaultProps = {
    center: [33.6506504,-117.7456957],
    zoom: 16
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
            {testData.map( (place) =>
                <Marker
                    lat={place.coords.lat}
                    lng={place.coords.long}
                    name={place.name}
                    address={place.address}
                    key={place.id} />
            )}
          </GoogleMapReact>
        </div>
    );
  }
}

export default GoogleMap;

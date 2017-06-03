import React, {Component} from 'react';
import PropTypes from 'prop-types';
import testData from '../server/routes/places.json';

import styles from './App.css';
import PlaceDetailMenu from './PlaceDetailMenu';
import GoogleMap from './Map';

// this is the topmost level of the map page, so the state (data)
// and functions that act on the data from the redux containers will connect to this
// there is another level above this that has the provider/store stuff which will replace this one in the routes


export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      places: testData,
      selectedPlace: {},
      detailVisible: false
    };
  }

  onMarkerClick(place) {

    console.log("marker click id passed in", place);

    this.setState({
      selectedPlace: place,
      detailVisible: true
    });

    console.log(this.state.selectedPlace);
  }

  onReviewBtnClick(e) {
    console.log("review btn target", e.target);
  }

  onMapClick(){

    console.log("clicked map");
    if(this.state.detailVisible === true){
      this.setState({
        detailVisible: false
      });
    }


    console.log(this.state.detailVisible);
  }

  render() {
    return (
      <div>
        <PlaceDetailMenu setVisible={this.state.detailVisible} onReviewBtnClick={(e)=>this.onReviewBtnClick(e)} place={this.state.selectedPlace}/>
        <GoogleMap places={testData} handleMapClick={()=>this.onMapClick()} handleMarkerClick={(place) => this.onMarkerClick(place)}/>
      </div>
    )
  }
}

export default MapContainer;
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Popup, Rating } from 'semantic-ui-react';

const popupStyle = {
  textAlign: 'center',
  fontSize: '.9em'
};

const addressStyle = {
  padding: '0 0 8px 0'
};

class Marker extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zip: PropTypes.string
    })
  };

  static defaultProps = {};

  render() {
    return (
    <Popup hoverable trigger={<Button basic circular color='green' icon='map pin' />}
           position="top center"
           style={popupStyle}>
      <Popup.Header>{this.props.name}</Popup.Header>
      <Popup.Content>
        <div style={addressStyle}>
          <p>{this.props.address.street}<br/>
          {this.props.address.city},{this.props.address.state} {this.props.address.zip}</p>
        </div>
        <Rating icon='star' defaultRating={3} maxRating={4} />
      </Popup.Content>
    </Popup>

    );
  }
}

export default Marker;
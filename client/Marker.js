import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Popup, Rating, Icon } from 'semantic-ui-react';

const popupStyle = {
  textAlign: 'center',
  fontSize: '.9em'
};

class Marker extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  static defaultProps = {};

  render() {
    return (
    <Popup hoverable trigger={<Button basic circular color='green' icon='map pin' />}
           position="top center"
           style={popupStyle}>
      <Popup.Header> {this.props.name} </Popup.Header>
      <Popup.Content>

          <span>3.2</span>
        <div style={{display: 'inline-block',margin: '0 5px'}}>
          <Rating size="tiny" disabled icon='star' defaultRating={3} maxRating={5} />
        </div>
          <span>(15)</span>
        <br/>
          <div style={{marginTop: '5px'}}>
            <Popup trigger={<Icon circular name='handicap' />}
                   size='tiny' content="Handicap stall" position="top center" inverted/>
            <Popup trigger={<Icon circular name='music' />}
                   size='tiny' content="Music" position="top center" inverted/>
            <Popup trigger={<Icon circular name='users' />}
                   size='tiny' content="Automatic hand dryers" position="top center" inverted/>
            <Popup trigger={<Icon circular name='users' />}
                   size='tiny' content="Paper towels" position="top center" inverted/>
          </div>
      </Popup.Content>
    </Popup>

    );
  }
}

export default Marker;
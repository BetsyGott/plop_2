import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Menu, Icon, Rating, Header, Popup, Comment } from 'semantic-ui-react';

import styles from './App.css';
import GoogleMap from './Map';


export class MapContainer extends Component {
  render() {
    return (
      <div>
        <Menu fixed="top" vertical sticky className={`${styles.sideMenu}`}>
          <Menu.Item>
            <Menu.Header>
              <Header as='h2'>Place Name</Header>
            </Menu.Header>
            <Menu.Menu>
              <Menu.Item>
                <div style={{width: '50%', display: 'inline-block', fontSize: '1.2em'}}>
                  1234 5th Street <br/>
                  Irvine, CA 99999
                </div>
                <div style={{width: '50%', display: 'inline-block'}}>
                  <Button primary floated='right'>Add a Review</Button>
                </div>
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item>
            <span>3.2</span>
            <div style={{display: 'inline-block',margin: '0 5px'}}>
              <Rating size="tiny" disabled icon='star' defaultRating={3} maxRating={5} />
            </div>
            <span>(Reviewed 15 times)</span>
          </Menu.Item>
          <Menu.Item>
            <Menu.Header>Amenities</Menu.Header>
            <Menu.Menu>
              <Menu.Item>
                <div style={{marginTop: '5px'}}>
                  <Popup trigger={<Icon circular size='large' name='handicap' />}
                         size='tiny' content="Handicap stall" position="top center" inverted/>
                  <Popup trigger={<Icon circular size='large' name='music' />}
                         size='tiny' content="Music" position="top center" inverted/>
                  <Popup trigger={<Icon circular size='large' name='users' />}
                         size='tiny' content="Automatic hand dryers" position="top center" inverted/>
                  <Popup trigger={<Icon circular size='large' name='users' />}
                         size='tiny' content="Paper towels" position="top center" inverted/>
                </div>
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item>
            <Menu.Header>Reviews</Menu.Header>
            <Menu.Menu>
              <Menu.Item>
              <div style={{fontSize: '1.2em'}}>
                <Comment.Group>
                  <Comment>
                    <Comment.Avatar src='/assets/images/avatar/small/matt.jpg' />
                    <Comment.Content>
                      <Comment.Author as='a'>Matt</Comment.Author>
                      <Comment.Metadata>
                        <div>Today at 5:42PM</div>
                      </Comment.Metadata>
                      <Comment.Text>How artistic!</Comment.Text>
                    </Comment.Content>
                  </Comment>

                  <Comment>
                    <Comment.Avatar src='/assets/images/avatar/small/elliot.jpg' />
                    <Comment.Content>
                      <Comment.Author as='a'>Elliot Fu</Comment.Author>
                      <Comment.Metadata>
                        <div>Yesterday at 12:30AM</div>
                      </Comment.Metadata>
                      <Comment.Text>
                        <p>This has been very useful for my research. Thanks as well!</p>
                      </Comment.Text>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
              </div>
              </Menu.Item>
            </Menu.Menu>

          </Menu.Item>
        </Menu>
        <GoogleMap/>
      </div>
    )
  }
}

export default MapContainer;
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Segment, Button, Menu, Icon, Rating, Header, Popup, Comment } from 'semantic-ui-react';
import styles from './App.css';


export class PlaceDetailMenu extends Component {

  static PropTypes = {
      place: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        coords: PropTypes.shape({
          lat: PropTypes.string,
          long: PropTypes.string
        }),
        address: PropTypes.object,
        ratings: PropTypes.arrayOf(PropTypes.number),
        "amenities": PropTypes.arrayOf(PropTypes.object),
        "reviews": PropTypes.arrayOf(PropTypes.object)
      }),
      onReviewBtnClick: PropTypes.func,
      setVisible: PropTypes.bool
  };

  render() {
    return (
            <Sidebar as={Menu} animation='overlay' width='wide' visible={this.props.setVisible} vertical className={`${styles.sideMenu}`}>
            <Menu.Item>
              <Menu.Header>
                <Header as='h2'>{this.props.place.name}</Header>
              </Menu.Header>
              <Menu.Menu>
                <Menu.Item>
                  {this.props.place.address !== undefined &&
                  <div style={{width: '50%', display: 'inline-block', fontSize: '1.1em'}}>
                    {this.props.place.address.street} <br/>
                    {this.props.place.address.city}, {this.props.place.address.state} {this.props.place.address.zip}
                  </div>
                  }

                  <div style={{width: '50%', display: 'inline-block'}}>
                    <Button primary floated='right' onClick={this.props.onReviewBtnClick}>Review this Bathroom</Button>
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
                        <Comment.Avatar src={require('assets/man-sitting-in-the-bathroom.png')} />
                        <Comment.Content>
                          <Comment.Author as='a'>Matt</Comment.Author>
                          <Comment.Metadata>
                            <div>Today at 5:42PM</div>
                          </Comment.Metadata>
                          <Comment.Text>How artistic!</Comment.Text>
                        </Comment.Content>
                      </Comment>

                      <Comment>
                        <Comment.Avatar src={require('assets/man-sitting-in-the-bathroom.png')} />
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
            </Sidebar>
    )
  }
}

export default PlaceDetailMenu;
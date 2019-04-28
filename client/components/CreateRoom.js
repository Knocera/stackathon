import React, {Component} from 'react'
import socket from '../socket'
import {Link} from 'react-router-dom'
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Container,
  Divider,
  Fragment
} from 'semantic-ui-react'

class CreateRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      room: '',
      roomCode: '',
      userName: localStorage.getItem('username'),
      team: undefined

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCreateRoom = this.handleCreateRoom.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addTeam(event){
    this.setState({team: event.target.color})

  }

  handleCreateRoom() {
    console.log(this.state)
    socket.emit('createRoom', this.state)
    console.log('Handle Create Room Fired!')
  }

  render() {
    return (
      <div className="login-form">
        <Grid
          textAlign="center"
          style={{height: '100%'}}
          verticalAlign="middle"
        >
          <Grid.Column style={{maxWidth: 450}}>
            <Form size="large" color="blue">
              <Segment stacked>
                <Form.Field>
                  <label htmlFor="room">
                    <h4>Room Name</h4>
                  </label>
                  <input
                    name="room"
                    type="text"
                    placeholder="Room Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <label htmlFor="roomCode">
                    <h4>Room Code</h4>
                  </label>
                  <input
                    name="roomCode"
                    type="number"
                    placeholder="Room Code"
                    value={this.state.roomCode}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <br />
                <Grid columns={2}>
                  <Grid.Column>
                    <h4>Red Players:</h4>
                    {this.props.state.redTeam ? (
                      this.props.state.redTeam.map(player => {
                        return <p>{player}</p>
                      })
                    ) : (
                      <p>No players have joined yet</p>
                    )}
                  </Grid.Column>
                  <Grid.Column>
                    <h4>Blue Players:</h4>
                    {this.props.state.blueTeam ? (
                      this.props.state.blueTeam.map(player => {
                        return <p>{player}</p>
                      })
                    ) : (
                      <p>No players have joined yet</p>
                    )}
                  </Grid.Column>
                </Grid>
                <br/>
                <Grid.Row>
                  <Grid.Row>
                    <Button color="red" onClick={this.props.addRedTeammate}>
                      Join Red Team
                    </Button>
                    <Button color="blue" onClick={this.props.addBlueTeammate}>
                      Join Blue Team
                    </Button>
                  </Grid.Row>
                  <Grid.Row>
                    <br />
                    <Link to="/Game">
                      <Button onClick={this.handleCreateRoom}>
                        Create Room
                      </Button>
                    </Link>
                  </Grid.Row>
                </Grid.Row>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default CreateRoom

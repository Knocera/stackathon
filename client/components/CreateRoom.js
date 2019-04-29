import React, {Component} from 'react'
import socket from '../socket'
import {Button, Form, Grid, Segment} from 'semantic-ui-react'

class CreateRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      room: '',
      userName: localStorage.getItem('username')
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCreateRoom = this.handleCreateRoom.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addTeam(event) {
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
                {/* <Form.Field>
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
                </Form.Field> */}
                <br />

                <Button onClick={this.handleCreateRoom}>Create Room</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default CreateRoom

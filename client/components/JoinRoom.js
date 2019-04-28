import React, { Component } from 'react'
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

class JoinRoom extends Component {
  constructor(props) {
    super(props)
    this.state ={
      room: '',
      roomCode: 0,
      userName: localStorage.getItem('username')
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleJoinRoom = this.handleJoinRoom.bind(this)

  }
  componentDidMount(){
    this.setState({room: this.props.name})
  }
  handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  handleJoinRoom(){
      console.log('in join room',this.state)




      socket.emit('joinRoom', this.state)
      console.log('Handle Join Room Fired!');
    }

  render(){

  return(

    <div className="login-form">
      <Grid textAlign="center" style={{height: '100%'}} verticalAlign="middle">
        <Grid.Column style={{maxWidth: 450}}>
          <Form size="large" color="blue">
              <Segment stacked>

                    <Form.Field >
                      <label htmlFor="roomCode">
                        <h4> <strong>{this.props.name}</strong>'s Room Code</h4>
                      </label>
                      <input
                        name="roomCode"
                        type="number"
                        placeholder="Room Code"
                        value={this.state.roomCode}
                        onChange={this.handleChange}
                      />
                    </Form.Field>

                    <Grid columns={2} divided>
              <Grid.Column>

                <h4>Red Players:</h4>
                {this.props.state.redTeam ? this.props.state.redTeam.map(player => {
                  return <p>{player}</p>
                }):<p>No players have joined yet</p>}

              </Grid.Column>
              <Grid.Column>


                <h4>Blue Players:</h4>
                {this.props.state.blueTeam ? this.props.state.blueTeam.map(player => {
                  return <p>{player}</p>
                }):<p>No players have joined yet</p>}


              </Grid.Column>

            </Grid>
            <br/>
                    <Button color="red" onClick={this.props.addRedTeammate}>
                  Join Red Team
                </Button>
                <Button color="blue" onClick={this.props.addBlueTeammate}>
                  Join Blue Team
                </Button>
                <br/>
                <br/>

                <Link to='/Game'>
                <Button onClick={this.handleJoinRoom}>Join Room</Button>
                </Link>

                </Segment>

          </Form>
        </Grid.Column>

      </Grid>
    </div>

  )
}
}

export default JoinRoom




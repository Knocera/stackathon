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

class JoinRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      room: '',
      roomCode: 0,
      userName: localStorage.getItem('username'),
      showTeam: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleJoinRoom = this.handleJoinRoom.bind(this)


  }
  componentDidMount() {
    this.setState({room: this.props.name})
    console.log('comp mounted', this.state)
    console.log('comp mounted pros', this.props)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleJoinRoom() {

    let room = this.props.name
    let name = localStorage.getItem('username')
    if (name) {
      let state = {room: room, userName: name}
      socket.emit('joinRoom', state)

    }
    this.setState(prevState=>({showTeam: !prevState.showTeam}))
  }




  render() {
    return (
      <div className="login-form">
        {!this.state.showTeam ? <Segment stacked><Button onClick={this.handleJoinRoom}>Join {this.props.name}</Button></Segment> : null}


      </div>
    )
  }
}

export default JoinRoom

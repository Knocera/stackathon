import React, {Component} from 'react'
import CreateRoom from './CreateRoom'
import {Redirect} from 'react-router-dom'
import {Button, Container, Grid, Header, GridColumn} from 'semantic-ui-react'
import socket from '../socket'
import CreateGame from './CreateGame'
import JoinRoom from './JoinRoom'

class Lobby extends Component {
  constructor(props) {
    super(props)
    this.state = {
      createGame: false,
      createRoom: false,
      joinRoom: false,
      selectedRoom: "",
      gameRoomList: {}
    }
    this.showCreateGame = this.showCreateGame.bind(this)
    this.showCreateRoom = this.showCreateRoom.bind(this)
    this.joinRoom = this.joinRoom.bind(this)
    // this.roomCreated = this.roomCreated.bind(this)
  }

  componentDidMount(){
    socket.emit('gameRoomList')
    socket.on('gameRoomList', data =>{
      this.setState({gameRoomList: data})
      console.log('thisstate', this.state)
    })
  }



  showCreateRoom() {
    this.setState(prevstate => ({createRoom: !prevstate.createRoom, joinRoom: false}))
  }
  showCreateGame() {
    this.setState(prevstate => ({createGame: !prevstate.createGame}))
  }
  joinRoom(event){
    let room = event.target.name
  //   console.log('*****event.target: ', event.target);

  //   console.log('*****event.target.name: ', event.target.name);
  //   let name = localStorage.getItem('username')
  //   if(name){

  //     let state = {room: room, userName: name  }
  //     socket.emit('joinRoom', state)
  //   }
    this.setState(prevstate => ({joinRoom: !prevstate.joinRoom, selectedRoom: room, createRoom: false})
    )
  }
  render() {
    return (
        <div>
        <Grid textAlign="center" style={{height: '100%'}} verticalAlign="middle">
        <Grid.Column style={{maxWidth: 450}}>
          <h1>Code Names</h1>
          <h3>Game Lobby</h3>
          <p>Welcome to Code Names </p>
          <Header>Active Game Rooms</Header>
          {Object.keys(this.state.gameRoomList).length ? Object.keys(this.state.gameRoomList).map(key=> {
            return <button name={key} onClick={this.joinRoom}>{key}</button>
          }): <p>There are no active games</p>}


<br/>

          <Button style={{margin: 20}} onClick={this.showCreateRoom}>Create a New Room</Button>
<br/>


          {/* Determine what to show on page : Create, Join or nothing */}
          {!this.state.createRoom ? null : <CreateRoom createRoom={this.props.createRoom} addRedTeammate={this.props.addRedTeammate} addBlueTeammate={this.props.addBlueTeammate} state={this.props.state}/>}

          {!this.state.joinRoom ? null : <JoinRoom  name={this.state.selectedRoom} createRoom={this.props.createRoom} addRedTeammate={this.props.addRedTeammate} addBlueTeammate={this.props.addBlueTeammate} state={this.props.state} />}

          {/* <Button onClick={this.showCreateGame}>Create New Game</Button> */}
          {/* {!this.state.createGame || this.setState.createRoom ? null : <CreateGame createRoom={this.props.createRoom} addRedTeammate={this.props.addRedTeammate} addBlueTeammate={this.props.addBlueTeammate} state={this.props.state}/>} */}


        </Grid.Column>
        </Grid>
      </div>
    )
  }
}
export default Lobby

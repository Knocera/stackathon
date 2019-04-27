
import React, {Component} from 'react'

import {Button, Container, Grid, GridColumn} from 'semantic-ui-react'
import socket from '../socket'
import CreateGame from './CreateGame'


class Lobby extends Component{
  constructor(){
    super()
    this.state={
      createGame: false,
      roomCode: null,
      selectedRoom: null,
    }
    this.createGame = this.createGame.bind(this)




  }
      createGame(){
        this.setState(prevstate=> ({createGame: !prevstate.createGame}))
      }
  render() {
    return (
      <div>
        <div>
          <h1>Code Names</h1>
          <h3>Game Lobby</h3>
          <p>Welcome to Code Names </p>
          <Button onClick={this.createGame}>Create New Game</Button>
          {!this.state.createGame ? null : <CreateGame />}


        </div>
      </div>
    )
  }

}
export default Lobby

import React, {Component} from 'react'

import {Button, Container, Grid, GridColumn} from 'semantic-ui-react'
import socket from '../socket'
import CreateGame from './CreateGame'

class Lobby extends Component {
  constructor() {
    super()
    this.state = {
      createGame: false,
      roomCode: null,
      selectedRoom: null
    }
    this.showCreateGame = this.showCreateGame.bind(this)
    // this.createNewGame = this.createNewGame.bind(this)
  }

  componentDidMount(){
  }

  showCreateGame() {
    this.setState(prevstate => ({createGame: !prevstate.createGame}))
  }
  render() {
    return (
      <div>
        <div>
          <h1>Code Names</h1>
          <h3>Game Lobby</h3>
          <p>Welcome to Code Names </p>
          <Button onClick={this.showCreateGame}>Create New Game</Button>
          {!this.state.createGame ? null : <CreateGame />}
        </div>
        <Button onClick={this.createNewGame}>Create New Game </Button>
      </div>
    )
  }
}
export default Lobby

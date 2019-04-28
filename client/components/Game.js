import React, {Component} from 'react'
import {Login, Lobby, WordsView} from '../components'
import {Button, Container, Grid, GridColumn} from 'semantic-ui-react'
import socket from '../socket'

class Game extends Component {
  constructor() {
    super()
    this.state = {}
    this.startGame = this.startGame.bind(this)
  }

  componentDidMount() {




  }
  startGame() {
    socket.emit('createRoom', {
      userName: 'PeleCate',
      room: 'Peles Room',
      roomCode: 123,
      team: 'red',
      role: 'spyMaster'
    })

    socket.on('gameState', gameState => {
      this.setState(gameState)
    })

  }


  render() {
    let keyCounter = 0

    console.log('in render', this.state)

    return (
      <div>
        <Login />

        <Lobby />

        <WordsView props={this.state} />

        <Button onClick={this.startGame}>Start Game</Button>
      </div>
    )
  }
}

export default Game

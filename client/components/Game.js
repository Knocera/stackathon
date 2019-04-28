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
        {/* If client hasnt saved a username to local storage show login form if not then show the lobby */}
        {!localStorage.getItem('username') ? <Login /> : null}

        {localStorage.getItem('username') && !this.state.isPlaying ? <Lobby startGame={this.startGame}/> :  null }


        {this.state.isPlaying ? <WordsView props={this.state} /> : null }




      </div>
    )
  }
}

export default Game

import React, {Component} from 'react'
import {Login, Lobby, WordsView} from '../components'
import {Button, Container, Grid, GridColumn} from 'semantic-ui-react'
import socket from '../socket'
import RevealedWordView from './RevealedWordView'

class Game extends Component {
  constructor() {
    super()
    this.state = {
      game: {},
      players: {},
      room: '',
      offlineMode: false,
      offlineSpymaster: false
    }
    // this.createRoom = this.createRoom.bind(this)
    this.startGame = this.startGame.bind(this)
    this.showState = this.showState.bind(this)
    this.toggleOffline = this.toggleOffline.bind(this)
    this.revealAll = this.revealAll.bind(this)
    this.offlineSpymasterView = this.offlineSpymasterView.bind(this)
    // this.handleJoinRoom = this.handleJoinRoom.bind(this)
  }

  componentDidMount() {
    socket.on('serverInfo', gameInfo => {
      console.log('Current Game Information: ', gameInfo)
    })
    socket.on('gameState', gameState => {
      this.setState(gameState)
    })
    socket.on('joinResponse', gameInfo => {
      console.log(gameInfo)
      this.setState(gameInfo)
    })
  }
  toggleOffline() {
    this.setState({offlineMode: true, isPlaying: true})
    socket.emit('createRoom', {
      room: 'offline',
      userName: localStorage.getItem('username')
    })
    socket.emit('newGame')
  }
  showState() {
    console.log(this.state)
  }

  startGame() {
    socket.emit('newGame')

    this.setState({isPlaying: true})
  }

  addSpyMaster(event) {
    event.preventDefault()
    let value = event.target.value
    value = value.toLowerCase()
    this.setState({[event.target.name]: value})

    event.target.value = ''
    console.log(this.state)
  }

  revealAll() {
    let cards = this.state.game.board
    let revealedCards = cards.map(index => {
      index.isRevealed = true
      return index
    })
    this.setState({board: revealedCards})
  }

  offlineSpymasterView() {
    this.setState(prevState => ({offlineSpymaster: !prevState}))
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggleOffline}>Play Offline</Button>
        <Button onClick={this.offlineSpymasterView}>Spy Master View</Button>
        {this.offlineMode ? (
          <div>
            <WordsView props={this.state} revealAll={this.revealAll} />
            {/* {this.offlineSpymaster ? ( */}
            <RevealedWordView props={this.state} />
            {/* ) : null} */}
          </div>
        ) : (
          <Grid
            textAlign="center"
            style={{height: '100%'}}
            verticalAlign="middle"
          >
            <Grid.Column>
              <Button onClick={this.showState}>Show State</Button>
              {/* If client hasnt saved a username to local storage show login form*/}

              {!localStorage.getItem('username') ? <Login /> : null}

              {/* If client has signed in but is not playing, show the lobby */}

              {localStorage.getItem('username') && !this.state.isPlaying ? (
                <Lobby
                  state={this.state}
                  createRoom={this.createRoom}
                  addBlueTeammate={this.addBlueTeammate}
                  addRedTeammate={this.addRedTeammate}
                  handleJoinRoom={this.handleJoinRoom}
                />
              ) : null}

              {this.state.isPlaying ? <WordsView props={this.state} /> : null}
            </Grid.Column>
          </Grid>
        )}
      </div>
    )
  }
}

export default Game

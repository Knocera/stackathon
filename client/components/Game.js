import React, {Component} from 'react'
import {Login, Lobby, WordsView} from '../components'
import {Button, Container, Grid, GridColumn} from 'semantic-ui-react'
import socket from '../socket'

class Game extends Component {
  constructor() {
    super()
    this.state = {
      game: {},
      players: {},
      room: ''
    }
    // this.createRoom = this.createRoom.bind(this)
    this.addRedTeammate = this.addRedTeammate.bind(this)
    this.addBlueTeammate = this.addBlueTeammate.bind(this)
    this.showState = this.showState.bind(this)
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
    socket.on('gameState', gameState => {
      this.setState(gameState)
    })
  }

  showState() {
    console.log(this.state)
  }

  addRedTeammate() {
    // let value = localStorage.getItem('username')
    // value = value.slice(1, value.length - 1).toLowerCase()
    // value = value[0].toUpperCase() + value.slice(1)
    // if (
    //   !this.state.blueTeam.includes(value) ||
    //   !this.state.redTeam.includes(value)
    //) {
    //   this.setState(prevState => ({redTeam: [...prevState.redTeam, value]}))
    //   console.log('in add teammate')

      socket.emit('joinTeam', {team: 'red'})

      socket.on('gameState', gameState => {
        this.setState(gameState)
      })
    // } else {
    //   console.log('That user is already on a team')
    // }
  }
  addBlueTeammate() {
    // let value = localStorage.getItem('username')
    // value = value.slice(1, value.length - 1).toLowerCase()
    // value = value[0].toUpperCase() + value.slice(1)
    // if (
    //   !this.state.blueTeam.includes(value) ||
    //   !this.state.redTeam.includes(value)
    // ) {
      // this.setState(prevState => ({blueTeam: [...prevState.blueTeam, value]}))
      // console.log('in add teammate')

      socket.emit('joinTeam', {team: 'blue'})

      socket.on('gameState', gameState => {
        this.setState(gameState)
      })
    // } else {
    //   console.log('That user is already on a team')
    // }
  }
  addSpyMaster(event) {
    event.preventDefault()
    let value = event.target.value
    value = value.toLowerCase()
    this.setState({[event.target.name]: value})

    event.target.value = ''
    console.log(this.state)
  }

  render() {
    let keyCounter = 0

    return (
      <div>
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

            {/* If client is playing show the game*/}

            {this.state.isPlaying ? <WordsView props={this.state} /> : null}
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Game

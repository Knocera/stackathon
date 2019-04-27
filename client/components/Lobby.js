
import React, {Component} from 'react'
import WordCard from './WordCard'
import {Button, Container, Grid, GridColumn} from 'semantic-ui-react'
import socket from '../socket'


class Lobby extends Component{
  constructor(){
    super()
    this.state={

      roomCode: null,
      selectedRoom: null,
    }





  }
  render() {
    return (
      <div>
        <div>
          <h1>Code Names</h1>
          <h3>Game Lobby</h3>
          <p>Welcome to Code Names </p>



        </div>
      </div>
    )
  }

}
export default Lobby

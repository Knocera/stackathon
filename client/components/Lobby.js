
import React, {Component} from 'react'
import WordCard from './WordCard'
import {Button, Container, Grid, GridColumn} from 'semantic-ui-react'
import socket from '../socket'


class Lobby extends Component{
  constructor(){
    super()
    this.state={
      userName: "",
      roomCode: null,
      selectedRoom: null,
    }

    handleRoomCode(){

    }
    handleUserName(){}




  }
  render() {
    return (
      <div>
        {this.state.username.length < 3 ?
        <div>
          <h1>Code Names</h1>
          <h3>Game Lobby</h3>
          <p>Welcome to Code Names </p>

          <h4></h4>

        </div>

        :

        <div>

        </div>
        }



      </div>
    )
  }

}

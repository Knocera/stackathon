import React, {Component} from 'react'
import WordCard from './WordCard'
import {Button, Container, Grid, GridColumn} from 'semantic-ui-react'
import socket from '../socket'

class Game extends Component {
  constructor() {
    super()
    this.state = {
      isPlaying: false,
      gameBoardWords: [],
      cards: []
      // This can probably be stored in redux store
      // redCards: 9,
      // blueCards: 8,
      // assassin: false,
      // cardsRemaining: 25
    }

}

componentDidMount(){

}

revealCard(){
  console.log(this)



}

initializeBoard() {
    let game = []

    for (let i = 0; i < 5; i++) {
      game.push([])
      for (let j = 0; j < 5; j++) {
        game[i][j] = {
          x: i,
          y: j,
          isRed: false,
          isBlue: false,
          isAssassin: false,
          isNeutral: true,
          isRevealed: false
      }
    }
  }
  game = game.reduce(function(prev, curr) {
  return prev.concat(curr);
});
  return game
}


assignValues(game){
    game[24].isAssassin = true
    game[24].isNeutral= false
    for (let i = 1; i < 8; i++){
      game[i].isBlue= true
      game[i].isNeutral= false
      game[i + 10].isRed = true
      game[i+10].isNeutral= false
    }
    if ((Math.floor(Math.random * 20) % 2) === 0){
      game[0].isBlue = true;

    }else{
      game[0].isRed = true
    }

    return game
  }



shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // swap elements
  }
  return array
}

startGame(){
  if (this.state.isPlaying){
    console.log("The game has already started")
  } else {
    console.log("the game has begun")
    this.setState({isPlaying: true})
  }

}


  render() {
    let keyCounter = 0
    let game = this.shuffle(this.assignValues(this.initializeBoard()))

    return (
      <div>
        <Container>
          <Grid celled columns={5}>
            {game.map(obj => {
              keyCounter++
              return (
                <GridColumn key={keyCounter}>

                <WordCard
                  cardNum={keyCounter}
                  isRed={obj.isRed}
                  isBlue={obj.isBlue}
                  isAssassin={obj.isAssassin}
                  isNeutral={obj.isNeutral}

                  />
              </GridColumn>
              )
            })}
          </Grid>
          <Button onClick={this.startGame}>Start Game</Button>
        </Container>
      </div>
    )
  }
}

export default Game

import React, {Component} from 'react'
import WordCard from './WordCard'
import {Button, Container, Grid, GridColumn} from 'semantic-ui-react'

class Game extends Component {
  constructor() {
    super()
    this.state = {
      isPlaying: false

      // This can probably be stored in redux store
      // redCards: 9,
      // blueCards: 8,
      // assassin: false,
      // cardsRemaining: 25
    }
  }

  initializeGame() {
    let game = []

    for (let i = 0; i < 5; i++) {
      game.push([])
      for (let j = 0; j < 5; j++) {
        game[i][j] = {
          x: i,
          y: j,
          cardName: undefined,
          isRed: false,
          isBlue: false,
          isAssassin: false,
          isNeutral: true,
          isRevealed: false


      }
      // getWords
      // populate board
      // assign card values -> randomly
    }

  }return game}

  assignValues(game){
    let assignedCards = []
    let blue, red = 0
      let ax = Math.floor(Math.random() * 5)
      let ay = Math.floor(Math.random() * 5)
      game[ax][ay].isAssassin = true



    while (blue < 9){
      let bx = Math.floor(Math.random() * 5)
      let ry = Math.floor(Math.random() * 5)
      if (game[bx][ry].isNeutral){
        game[bx][ry].isNeutral = false;
        game[bx][ry].isBlue = true
        blue++
      }
    }
    while (red < 9){
      let rx = Math.floor(Math.random() * 5)
      let ry = Math.floor(Math.random() * 5)
      if (game[rx][ry].isNeutral){
        game[rx][ry].isNeutral = false;
        game[rx][ry].isRed = true
        red++
      }
    }
    return game.slice()
  }

  render() {
    let keyCounter = 0
    let game = this.assignValues(this.initializeGame())
    game = game.reduce(function(prev, curr) {
      return prev.concat(curr);
    });
    console.log(game[1])
    console.log(game[2])
    console.log(game[25])
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
                  isNeutral={obj.isNeautral}
                  isRevealed={obj.false}
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

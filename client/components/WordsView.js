import React, {Component} from 'react'
import WordCard from './WordCard'
import {Grid, Container, Card, Button, Header} from 'semantic-ui-react'

class WordsView extends Component {
  render() {
    let keyCounter = 0
    console.log('*****this.props in render: ', this.props)
    return (
      <Container>
          <Grid columns={2} stacked divided textAlign="center">
            <Grid.Column>
              <Header as='h3'>Remaining Red Team Cards</Header>
              <Header>{this.props.props.game ? this.props.props.game.red : 0}</Header>
            </Grid.Column>
            <Grid.Column>
              <Header as='h3'>Remaining Blue Team Cards</Header>
              <Header>{this.props.props.game ? this.props.props.game.blue : 0}</Header>
            </Grid.Column>
          </Grid>


        <Grid celled columns={5}>
          {this.props.props.game ? (
            this.props.props.game.board.map(obj => {
              keyCounter++
              return (
                <Grid.Column key={keyCounter}>
                  <WordCard
                    cardNum={keyCounter}
                    word={obj.word}
                    isRed={obj.isRed}
                    isBlue={obj.isBlue}
                    isAssassin={obj.isAssassin}
                    isNeutral={obj.isNeutral}
                    isRevealed={obj.isRevealed}
                  />
                </Grid.Column>
              )
            })
          ) : (
            <h1>Start a New Game</h1>
          )}
        </Grid>
      </Container>
    )
  }
}

export default WordsView

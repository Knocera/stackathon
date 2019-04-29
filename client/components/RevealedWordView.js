import React, {Component} from 'react'
import WordCard from './WordCard'

import RevealedWordCard from './revealedWordCard'
import {Grid, Container, Card, Button, Header} from 'semantic-ui-react'


class RevealedWordsView extends Component {
  constructor(props){
    super(props)
    this.state={
      isSpymaster: false
    }
    this.spyMasterView = this.spyMasterView.bind(this)
  }
  spyMasterView(){
    this.setState(prev=> ({isSpymaster: !prev}))
  }

  // eslint-disable-next-line complexity
  render() {
    // console.log('*****this.props Words View: ', this.props);
    let keyCounter = 0
    // let cardColor = null
    //   if (this.props.props.isRed){
    //     cardColor = "red"
    //   }else if(this.props.props.isBlue){
    //     cardColor = "blue"
    //   } else if(this.props.props.isAssassin){
    //     cardColor = "yellow"
    //   } else if(this.props.props.isNeutral){
    //     cardColor = "grey"
    //   }

    return (
      <Container>
          {/* <Grid columns={2} stacked divided textAlign="center">
            <Grid.Column>
              <Header as='h3'>Remaining Red Team Cards</Header>
              <Header>{this.props.props.game ? this.props.props.game.red : 0}</Header>
            </Grid.Column>
            <Grid.Column>
              <Header as='h3'>Remaining Blue Team Cards</Header>
              <Header>{this.props.props.game ? this.props.props.game.blue : 0}</Header>
            </Grid.Column>
    </Grid> */}


        <Grid celled columns={5}>

          {this.props.props.game.board.map(obj => {
            keyCounter++
            return (
              <Grid.Column key={keyCounter}>
                <RevealedWordCard
                  id="wordCard"
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
        }
      </Grid>







      </Container>
    )
  }
}

export default RevealedWordsView

import React, {Component} from 'react'
import {Card, Grid, Header, Button} from 'semantic-ui-react'


class WordCard extends Component {
  constructor() {
    super()
    this.revealCard = this.revealCard.bind(this)
    }

  revealCard(){
    console.log(this)
    this.setState({revealed: true})
  }

  render() {

    let cardColor = null
    if (this.state.revealed){
      if (this.props.isRed){
        cardColor = "red"
      }else if(this.props.isBlue){
        cardColor = "blue"
      } else if(this.props.isAssassin){
        cardColor = "yellow"
      } else if(this.props.isNeutral){
        cardColor = "grey"
      }
    }


    return (

      <Button onClick={this.revealCard} id ='wordcard' color={cardColor} >
          <Header  textAlign="center">{this.props.word}</Header>
      </Button>


    )
  }
}

export default WordCard

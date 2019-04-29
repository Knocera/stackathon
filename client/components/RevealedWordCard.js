import React, {Component} from 'react'
import {Card, Grid, Header, Button} from 'semantic-ui-react'


class RevealedWordCard extends Component {
  constructor(props) {
    super(props)
    this.state={
      revealed: true
    }

    this.revealCard = this.revealCard.bind(this)
    }

  revealCard(){
    console.log(this)
    this.setState({revealed: true})


  }

  render() {


    let cardColor = null
    if (this.state.revealed || this.props.revealed){
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

      <Button  as='div' onClick={this.revealCard} id='card' color={cardColor} >
          <h3 textAlign="center">{this.props.word}</h3>
      </Button>


    )
  }
}

export default RevealedWordCard

import React, {Component} from 'react'
import {Card, Grid} from 'semantic-ui-react'


class WordCard extends Component {
  constructor() {
    super()
    this.state={
      isRevealed: false
    }
    this.revealCard = this.revealCard.bind(this)
    }

  revealCard(){
    // this.setState({isRevealed: true})
    console.log(this.props)
  }

  render() {
    let cardColor = null
    console.log(this)
    // if (this.state.isRevealed){
    //   if (this.state.isRed){
    //     cardColor = "red"
    //   }else if(this.state.isBlue){
    //     cardColor = "blue"
    //   } else if(this.state.isAssassin){
    //     cardColor = "yellow"
    //   } else if(this.state.isNeutral){
    //     cardColor = "grey"
    //   }



    // }


    return (

      <Card onClick={this.revealCard} id ='wordcard'>
          <Card.Header color={cardColor}  textAlign="center">{this.props.cardName ? this.props.cardName : 'PlaceHolder'}</Card.Header>
      </Card>


    )
  }
}

export default WordCard

import React, {Component} from 'react'
import {Card, Grid} from 'semantic-ui-react'


class WordCard extends Component {
  constructor() {
    super()
    }


  render() {
    return (
      <Card id ='wordcard'>
        <Card.Header  textAlign="center">{this.props.cardName ? this.props.cardName : 'PlaceHolder'}</Card.Header>
      </Card>
    )
  }
}

export default WordCard

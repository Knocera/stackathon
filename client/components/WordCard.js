import React, {Component} from 'react'
import {Card} from 'semantic-ui-react'


class WordCard extends Component{
  constructor(){
    super()
    this.state = {}
  }
  render(){
    return (
      <Card>
        <Card.Content>
          <Card.Header>RandomWord</Card.Header>
        </Card.Content>
      </Card>
    )


  }
}




export default WordCard

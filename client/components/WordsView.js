import React, {Component} from 'react'
import WordCard from './WordCard'

import socket from '../socket'
import {Grid, Container} from 'semantic-ui-react'

class WordsView extends Component {
  constructor() {
    super()
    this.state = {
      x: 0,


    }
  }
  componentDidMount() {
    // socket.on('newName', (data) => {this.setState({x: data})});
    // window.addEventListener("mouseover", () => {
    //   let data = {
    //     x: event.clientX,
    //     y: event.clientY
    //   }
    //   console.log('*******', data)
    //   socket.emit('FromServer', data )
    // })
  }

  arrayMaker(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
      arr.push(i)
    }
    return arr
  }

  render() {
    let array = this.arrayMaker(25)

    // word={card.word}
    // key={card.id}
    // id={card.id}
    // revealed={card.revealed}
    // team={card.team}
    // userRole={user.role}
    // assassin={card.assassin}
    // revealCard={revealCard}

    return (
      <Container>
        <Grid celled columns={5}>
            {array.map(i => {

              return (
                <Grid.Column key={i} id="cardheader">
                  <WordCard />
                </Grid.Column>
              )
            })}

        </Grid>
      </Container>
    )
  }
}

export default WordsView

import React, {Component} from 'react'
import WordCard from './WordCard'
import socket from '../socket'
import {
  Grid,
  Container
} from 'semantic-ui-react'

class Homepage extends Component {
  constructor() {
    super()
    this.state = {
      x: 0
    }
  }
  componentDidMount(){
    socket.on('newName', (data) => {this.setState({x: data})});
    window.addEventListener("mouseover", () => {
      let data = {
        x: event.clientX,
        y: event.clientY
      }
      console.log('*******', data)
      socket.emit('FromServer', data )
    })
  }

  render() {
    return (
      <Container>
        <h1>{this.state.x}</h1>

        {/* <Grid>

          <Grid.Row columns={5}>
            <Grid.Column >
              <WordCard />
            </Grid.Column>

            <Grid.Column>
              <WordCard />
            </Grid.Column>

            <Grid.Column>
              <WordCard />
            </Grid.Column>

            <Grid.Column>
              <WordCard />
            </Grid.Column>

            <Grid.Column>
              <WordCard />
            </Grid.Column>

          </Grid.Row>
        </Grid> */}
      </Container>
    )
  }
}

export default Homepage

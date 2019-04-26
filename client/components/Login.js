import React, {Component} from 'react'
import WordCard from './WordCard'
import {Link} from 'react-router-dom'
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from 'semantic-ui-react'
import socket from '../socket'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onChange() {
    this.setState({ })
  }
  handleSubmit() {


    this.setState({
      [event.target.username]: event.target.value
    })
    const username = this.state.username
    localStorage.setItem('username', username)
  }

  render() {
    return (
      <Grid textAlign="center" style={{height: '100%'}} verticalAlign="middle">
        <Grid.Column style={{maxWidth: 450}}>
          <h1>Code Names</h1>

          <h3>Welcome to Code Names Lkdjfldajkladjfldakjdfasdlkfjadlkf</h3>
          <Form size="large">
            <Segment stacked>
              <Segment.Header>Choose your username</Segment.Header>
              <Form.Input
                fluid
                icon="user"
                name='username'
                iconPosition="left"
                placeholder='username'
                value=""
              />

              <Link to="/Lobby">
              <Button color="green" fluid size="large" onClick={this.handleSubmit}>
                Submit
              </Button>
              </Link>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

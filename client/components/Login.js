import React, {Component} from 'react'
import WordCard from './WordCard'
import {Link, Redirect} from 'react-router-dom'
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Container
} from 'semantic-ui-react'
import socket from '../socket'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit() {
    let username = this.state.username
    username.toLowerCase()
    localStorage.setItem('username', JSON.stringify(username))

  }

  render() {
    return (
      <Container >

      <Grid textAlign="center" style={{height: '100%'}} verticalAlign="middle" >
        <Grid.Column style={{maxWidth: 450}}>
          <h1>Code Names</h1>

          <h3>Welcome to Code Names Lkdjfldajkladjfldakjdfasdlkfjadlkf</h3>
          <Form size="large" >
            <Segment stacked >
              <Header as="h2" color="teal" textAlign="center">
                 Please create a new username for this session
              </Header>
              <Form.Input id='login-input'
                onChange={this.handleChange}
                fluid
                icon="user"
                name="username"
                iconPosition="left"
                placeholder="username"
                value={this.state.username}
              />

              <Link to="/Game">
                <Button
                  color="green"
                  fluid
                  size="large"
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
              </Link>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
      </Container>
    )
  }
}

export default Login

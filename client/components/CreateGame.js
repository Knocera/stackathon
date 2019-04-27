import React, {Component} from "react"
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Container,
  Fragment
} from 'semantic-ui-react'

class CreateGame extends Component{
  constructor(props){
    super(props)
  this.state={
    redSpyMaster: "",
    blueSpyMaster: "",
    redPlayer: "",
    bluePlayer: "",
    blueTeam: [],
    redTeam: [],
  }



  }
  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }
  addRedTeammate(username){

  }

  render() {
    return (
      <div>
        <h1>Create a new game</h1>
        <Form size="large" >
            <Segment stacked>
            <Grid columns={3}>
              <Grid.Column>
                <Header>Red Team</Header>
                <p>Red Team SpyMaster</p>
                <Form.Input id='form-spymaster'
                onChange={this.handleChange}
                fluid
                name="redSpyMaster"
                placeholder="Red SpyMaster"
                value={this.state.redSpyMaster}
              />
                <p>Red Team Members</p>
                <Form.Input id='form-members'
                onChange={this.handleChange}
                fluid
                name="redPlayer"
                placeholder="Red Team Members"
                value={this.state.redPlayer}
              />
              <Button onClick={this.addTeamMember}>Add Team Member</Button>
              </Grid.Column>
              <Grid.Column>


              </Grid.Column>


            </Grid>
            </Segment>


        </Form>
      </div>
    )
  }
}

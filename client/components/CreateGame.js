import React, {Component} from 'react'
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Container,
  Divider,
  Fragment
} from 'semantic-ui-react'
import socket from '../socket'

class CreateGame extends Component {
  constructor(props) {
    super(props)
    this.state = {

    //   // redSpyMaster: '',
    //   // blueSpyMaster: '',
    //   // redPlayer: '',
    //   // bluePlayer: '',
    //   blueTeam: [],
    //   redTeam: []
    }
    // // this.handleChange = this.handleChange.bind(this)
    // // this.addSpyMaster = this.addSpyMaster.bind(this)
  }

  render() {

    return (
      <div>
        <h1>Create a new game</h1>
        <p>Pick Your Team</p>
        <Form size="large">
          <Segment stacked>
            <Grid columns={2} divided>
              <Grid.Column>
                <Header>Red Team</Header>
                <h4>Red Players:</h4>
                {this.props.state.redTeam ? this.props.state.redTeam.map(player => {
                  return <p>{player}</p>
                }):<p>No players have joined yet</p>}
                <Button color="red" onClick={this.props.addRedTeammate}>
                  Join Red Team
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Header>Blue Team</Header>

                <h4>Blue Players:</h4>
                {this.props.state.blueTeam ? this.props.state.blueTeam.map(player => {
                  return <p>{player}</p>
                }):<p>No players have joined yet</p>}

                <Button color="blue" onClick={this.props.addBlueTeammate}>
                  Join Blue Team
                </Button>
              </Grid.Column>
              <Grid.Row>
                <Button onClick={this.props.createRoom}>Start Game</Button>
              </Grid.Row>
            </Grid>
          </Segment>
        </Form>
      </div>

      )
    }
  }
  export default CreateGame


      // <div>
      //   <h1>Create a new game</h1>
      //   <p>Please fill out all fields</p>
      //   <Form size="large">
      //     <Segment stacked>
      //       <Grid columns={3} divided>
      //         <Grid.Column>
      //           <Header>Red Team</Header>
      //           <h5>Red Team SpyMaster</h5>
      //           <Form.Input
      //             id="form-spymaster"
      //             onChange={this.handleChange}
      //             fluid
      //             name="redSpyMaster"
      //             placeholder="Players username"
      //             value={this.state.redSpyMaster}
      //           />
      //           <Button color='red' onClick={this.addSpyMaster}>Add Red SpyMaster</Button>
      //           <br/>
      //           <h5>Red Team Members</h5>
      //           <Form.Input
      //             id="form-members"
      //             onChange={this.handleChange}
      //             fluid
      //             name="redPlayer"
      //             placeholder="Player's username"
      //             value={this.state.redPlayer}
      //             />
      //           <Button color='red' onClick={this.addRedTeammate}>Add Team Member</Button>
      //         </Grid.Column>
      //         <Grid.Column>
      //           <Header>Red Team</Header>
      //           <h4>SpyMaster: {this.state.redSpyMaster}</h4>
      //           <h4>Red Players:</h4>
      //           {this.state.redTeam.map(player => {
      //             return <p>{player}</p>
      //           })}
      //           <Divider
      //             className="header"
      //             horizontal

      //           />
      //           <Header>Blue Team</Header>
      //           <h4>SpyMaster: {this.state.blueSpyMaster}</h4>
      //           <h4>Blue Players:</h4>
      //           {this.state.blueTeam.map(player => {
      //             return <p>{player}</p>
      //           })}
      //         </Grid.Column>
      //         <Grid.Column>
      //           <Header>Blue Team</Header>
      //           <h5>Blue Team SpyMaster</h5>
      //           <Form.Input
      //             id="form-spymaster"
      //             onChange={this.handleChange}
      //             fluid
      //             name="blueSpyMaster"
      //             placeholder="Blue SpyMaster"
      //             value={this.state.blueSpyMaster}
      //             />
      //           <Button color='blue' onClick={this.addSpyMaster}>Add Blue SpyMaster</Button>
      //           <br/>
      //           <h5>Blue Team Members</h5>
      //           <Form.Input
      //             id="form-members"
      //             onChange={this.handleChange}
      //             fluid
      //             name="bluePlayer"
      //             placeholder="Blue Team Members"
      //             value={this.state.bluePlayer}
      //           />
      //           <Button color='blue'onClick={this.addBlueTeammate}>Add Team Member</Button>
      //         </Grid.Column>
      //       </Grid>
      //     </Segment>
      //       <Button onClick={this.props.startGame}>Start Game</Button>
      //   </Form>
      // </div>

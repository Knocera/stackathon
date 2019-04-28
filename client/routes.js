import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'

import {me} from './store'
import {WordsView, WordCard, Game, Lobby, Login, CreateGame} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  constructor(){
    super()
    this.state = {
      isLoggedIn: false
    }

  }
  componentDidMount() {
    this.props.loadInitialData()
    if (localStorage.getItem('username')){
      this.setState({isLoggedIn: true})
    }



  }

  render() {

    return (
      <Switch>

      {this.state.isLoggedIn && (
        <Switch>

        <Route path="/wordCard" component={WordCard} />
        <Route path="/game" component={Game} />
        <Route path="/" component={Game} />
        </Switch>
        )}
      <Route component={Login} />
    </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!localStorage.username
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

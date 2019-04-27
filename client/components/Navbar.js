import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Menu, Icon, Dropdown, Image, Button, Grid} from 'semantic-ui-react'

const Navbar = () => (
  <Grid doubling>
    <Menu color="green" id="navBar" fixed="top">
      <Menu.Item>
        <Link className="nav-text" to="/Lobby">
          Lobby
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link className="nav-text" to="/Game">
          Game
        </Link>
      </Menu.Item>
      <Menu.Item position='right' margin="10px">
        <p>Your Username is: <strong>{localStorage.getItem('username')}</strong></p>
      </Menu.Item>
    </Menu>
  </Grid>
)

export default Navbar

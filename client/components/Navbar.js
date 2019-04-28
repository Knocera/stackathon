import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Menu, Icon, Dropdown, Image, Button, Grid} from 'semantic-ui-react'

function signOut(){
  localStorage.removeItem('username')
}

const Navbar = () => {
  let value = 'Login to Play'
  if (localStorage.getItem('username')){
    value = localStorage.getItem('username')
    value = value.slice(1, value.length-1).toLowerCase()
  }
  return(
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
      <Menu.Item position='right'margin="10px">
        <p  as='h4' >Your Username is: &nbsp;&nbsp; {value ? <strong>{value}</strong> : null }</p>
      </Menu.Item>
      {localStorage.getItem('username') ? <Menu.Item>
        <Link to='/Game'>
        <Button onClick={signOut} >Sign Out</Button>
        </Link>
      </Menu.Item>  : null }

    </Menu>
  </Grid>
)
  }

export default Navbar

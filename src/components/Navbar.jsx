import React from 'react'
import  { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile'
import Signup from './Signup'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'


export default class Home extends Component {
  render() {
    return (
      <>
    <Navbar  bg="dark" variant="dark">
    <Navbar.Brand href="#home">Medium</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="Login"><LoginButton /></Nav.Link>
      <Nav.Link href="Signup"><Signup /></Nav.Link>
      <Nav.Link href="Profile"><Profile /></Nav.Link>
      <Nav.Link href="Logout"><LogoutButton /></Nav.Link>
    </Nav>
    
  </Navbar>
      </>
    )
  }
}

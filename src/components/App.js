import React, { Component } from 'react';
import { Navbar, NavItem, MenuItem, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router'
import './App.css';

class NavBar extends Component {
  render() {
    return (
      <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">kJoule</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Dashboard</NavItem>
            <NavItem eventKey={2} href="#">Track</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;

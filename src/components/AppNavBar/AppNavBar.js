import React, {Component} from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import './AppNavBar.css';

class AppNavBar extends Component {

  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (<div>
      <Navbar inverse="inverse" collapseOnSelect="collapseOnSelect">
        <Navbar.Header>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem>
              Face Detection
            </NavItem>
            <NavItem eventKey={2} href="#">
              Demographics
            </NavItem>
          </Nav>
          <Nav pullRight="pullRight">
            <NavItem eventKey={1} href="#">
              User
            </NavItem>
            <NavItem eventKey={2} href="#">
              Log Out
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>;
    </div>);
  }
}

export default AppNavBar;

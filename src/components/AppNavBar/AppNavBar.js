import React, {Component} from 'react';
import AppLogo from '../AppLogo/AppLogo.js';
import Login from '../Login/login.js';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './AppNavBar.css';

const AppNavBar = (onRouteChange) => {
    return (<div>
      <Navbar inverse="inverse" collapseOnSelect="collapseOnSelect">
        <Navbar.Header>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <AppLogo/>
          </Nav>
          <Nav>
            <NavItem>
              Face Detection
            </NavItem>
            <NavItem eventKey={2} href="#" onClick={() => onRouteChange('demoGraph')}>
              Demographics
            </NavItem>
          </Nav>
          <Nav pullRight="true">
            <NavItem eventKey={1} href="#">
              User
            </NavItem>
            <NavItem eventKey={2} href="#" >
              Log Out
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>);
}

export default AppNavBar;

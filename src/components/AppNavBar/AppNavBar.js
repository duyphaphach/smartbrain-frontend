import React, {Component} from 'react';
import AppLogo from '../AppLogo/AppLogo.js';
// import Login from '../Login/login.js';
import FaceReco from '../FaceRecognition/FaceRecognition.js';
import {Navbar, Nav, NavItem, Button} from 'react-bootstrap';
import './AppNavBar.css';

class AppNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    if (this.props.isSignedIn) {
        return (
          <div>
            <header style={{marginBottom: '100px'}}>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar">
                    <a className="navbar-brand" href="#"><strong>Smart Brain</strong></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => this.props.onRouteChange('faceDetect')}>FaceRecognition</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => this.props.onRouteChange('demoGraph')}>DemoGraphics</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav nav-flex-icons">
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => this.props.onRouteChange('signout')}><i className="fa fa-power-off"></i></a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </header>
          </div>
        );
      } else {
        return (
          <div>
            <header style={{marginBottom: '100px'}}>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar">
                    <a className="navbar-brand" href="#"><strong>Smart Brain</strong></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => this.props.onRouteChange('signin')}>Sign In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() =>this.props.onRouteChange('register')}>Register</a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </header>
          </div>
        );
      }
  }
    // return (<div>
    //   <Navbar inverse="inverse" collapseOnSelect="collapseOnSelect">
    //     <Navbar.Header>
    //       <Navbar.Toggle/>
    //     </Navbar.Header>
    //     <Navbar.Collapse>
    //       <Nav>
    //         <AppLogo/>
    //       </Nav>
    //       <Nav>
    //         <NavItem>
    //           Face Detection
    //         </NavItem>
    //         <NavItem eventKey={2} href="#" onClick={() => onRouteChange('demoGraph')}>
    //           Demographics
    //         </NavItem>
    //       </Nav>
    //       <Nav pullRight="true">
    //         <NavItem eventKey={1} href="#">
    //           User
    //         </NavItem>
    //         <NavItem eventKey={2} href="#" >
    //           Log Out
    //         </NavItem>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Navbar>
    // </div>);
}

export default AppNavBar;

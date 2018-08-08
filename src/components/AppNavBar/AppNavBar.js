import React, {Component} from 'react';
import AppLogo from '../AppLogo/AppLogo.js';
import Login from '../Login/login.js';
import FaceReco from '../FaceRecognition/FaceRecognition.js';
import DemoGraph from '../DemoGraphics/demoGraphics.js';
import {Navbar, Nav, NavItem, Button} from 'react-bootstrap';
import './AppNavBar.css';

class AppNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: true,
    }
  }
  render() {
    if (this.state.isSignedIn) {
        return (
          <div>
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
              <div>
                <Button onClick={() => this.props.onRouteChange('faceDetect')}>FaceRecognition</Button>
                <Button onClick={() => this.props.onRouteChange('demoGraph')}>DemoGraphics</Button>
                <Button onClick={() => this.props.onRouteChange('signout')}>Sign Out</Button>
              </div>
            </nav>
          </div>
        );
      } else {
        return (
          <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => this.props.onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
            <p onClick={() =>this.props. onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
          </nav>
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

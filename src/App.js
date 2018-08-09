import React from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import AppNavBar from './components/AppNavBar/AppNavBar.js';
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm.js';
import FaceReco from './components/FaceRecognition/FaceRecognition.js';
import DemoGraphics from './components/DemoGraphics/DemoGraphics.js';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const app = new Clarifai.App({
 apiKey: 'ab8cd76d3d904529b913b56395139296'
});

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: '',
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  // onRouteChange = (route) => {
  //   if (route === 'faceDetect') {
  //
  //   } else if (route === 'demoGraph') {
  //
  //   }
  //   this.setState(route: route);
  // }

  render() {
    const {isSignedIn, imageUrl, route, box} = this.state;
    return (
      <div className="full-height">

        <div className="App">
          <Particles className='particles' params={particlesOptions}/>
         <AppNavBar isSignedIn = {isSignedIn} onRouteChange = {this.onRouteChange}/>
          {/* <Grid> */}

              {
                (route === 'signin')
                ?
                  (
                    (<SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />)
                  )
                :
                (route === 'faceDetect' || route === 'home')
                ?
                (
                  <div>
                       <FaceReco box={box} imageUrl={imageUrl} onButtonSubmit={this.onButtonSubmit}/>
                  </div>
                )
                :
                (
                 route === 'demoGraph'
                 ?
                 (<DemoGraphics/>)
                 :
                 (
                   route === 'signout'
                   ?
                   (<SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />)
                     :
                     route === 'register'
                     ?
                     (<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />)
                     :
                     (
                       true
                     )
                  )
               )

              }

          {/* </Grid> */}
        </div>
      </div>
    );
  }
}

export default App;

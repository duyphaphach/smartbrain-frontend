import React from 'react';
import Particles from 'react-particles-js';
import AppNavBar from './components/AppNavBar/AppNavBar.js';
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm.js';
import FaceReco from './components/FaceRecognition/FaceRecognition.js';
import DemoGraphics from './components/DemoGraphics/DemoGraphics.js';
import SignIn from './components/SignIn/SignIn.js';
import {Grid, Row, Col} from 'react-bootstrap';
import './App.css';

// const particlesParams = {
//   "particles": {
//     "number": {
//       "value": 10,
//       "density": {
//         "enable": true,
//         "value_area": 80.17060304327615
//       }
//     },
//     "color": {
//       "value": "#abc085"
//     },
//     "shape": {
//       "type": "polygon",
//       "stroke": {
//         "width": 0,
//         "color": "#000"
//       },
//       "polygon": {
//         "nb_sides": 7
//       },
//       "image": {
//         "src": "img/github.svg",
//         "width": 100,
//         "height": 100
//       }
//     },
//     "opacity": {
//       "value": 0.3,
//       "random": true,
//       "anim": {
//         "enable": false,
//         "speed": 1,
//         "opacity_min": 0.1,
//         "sync": false
//       }
//     },
//     "size": {
//       "value": 15,
//       "random": false,
//       "anim": {
//         "enable": true,
//         "speed": 10,
//         "size_min": 40,
//         "sync": false
//       }
//     },
//     "line_linked": {
//       "enable": false,
//       "distance": 200,
//       "color": "#ffffff",
//       "opacity": 1,
//       "width": 2
//     },
//     "move": {
//       "enable": true,
//       "speed": 20.844356791251798,
//       "direction": "none",
//       "random": true,
//       "straight": false,
//       "out_mode": "out",
//       "bounce": false,
//       "attract": {
//         "enable": true,
//         "rotateX": 600,
//         "rotateY": 1200
//       }
//     }
//   },
//   "interactivity": {
//     "detect_on": "canvas",
//     "events": {
//       "onhover": {
//         "enable": false,
//         "mode": "bubble"
//       },
//       "onclick": {
//         "enable": false,
//         "mode": "push"
//       },
//       "resize": true
//     },
//     "modes": {
//       "grab": {
//         "distance": 400,
//         "line_linked": {
//           "opacity": 1
//         }
//       },
//       "bubble": {
//         "distance": 365.4347455356053,
//         "size": 40,
//         "duration": 2,
//         "opacity": 8,
//         "speed": 3
//       },
//       "repulse": {
//         "distance": 200,
//         "duration": 0.4
//       },
//       "push": {
//         "particles_nb": 4
//       },
//       "remove": {
//         "particles_nb": 2
//       }
//     }
//   },
//   "retina_detect": true
// }

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      imageUrl: '',
      route: 'faceDetect',
      isSignedIn: true
    }
  }

  onInputChange = (event) => {
    this.setState({imageUrl: event.target.value});
    console.log(this.state.imageUrl);
  }

  onRouteChange = (route) => {
    this.setState({route: route});
    console.log('route');
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
        {/* <Particles className='particles' params={particlesParams}/> */}
        <div className="App">
          {/* <SignIn /> */}
          <AppNavBar isSignedIn = {isSignedIn} onRouteChange = {this.onRouteChange}/>
          {/*<Grid>

              {
                 (route === 'faceDetect') ?
                 (
                   <div>
                     <Row className="show-grid">
                       <Col xs={12} md={8}>
                         <ImageLinkForm onInputChange={this.onInputChange}/>
                       </Col>
                     </Row>
                     <Row>
                    <Col xs={12} md={8}>
                      <FaceReco imageUrl={this.state.imageUrl}/>
                    </Col>
                    </Row>
                   </div>
                  )
                      :  (
                        <Row xs={12} md={8}>
                          <DemoGraph/>
                        </Row>
                      )
              }

          </Grid> */}
          <DemoGraphics />
        </div>
      </div>
    );
  }
}

export default App;

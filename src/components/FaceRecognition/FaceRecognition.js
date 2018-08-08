import React from 'react';
import ImageLinkForm from '../ImageLinkForm/imageLinkForm.js';
import './FaceRecognition.css';
import Clarifai from 'clarifai';
import {Image, Row, Col} from 'react-bootstrap';

const app = new Clarifai.App({
 apiKey: '6b17ac395a4a482f87c614a73c04971c'
});

class FaceReco extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      input: '',
      box: {},
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => {
        console.log(response);
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch(err => console.log(err, 'ad'));
  }


  render() {
    const {imageUrl, box} = this.state;
    return (
      <div>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <div className='center ma'>
            <div className = 'absolute mt2'>
              <img atl="" id="inputimage" src={imageUrl} width='500px' height='auto'/>
              <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>

        </div>
      </div>
    );
  }
}

export default FaceReco;

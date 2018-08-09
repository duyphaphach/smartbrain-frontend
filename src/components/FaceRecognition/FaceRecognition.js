import React from 'react';
import ImageLinkForm from '../ImageLinkForm/imageLinkForm.js';
import './FaceRecognition.css';
import Clarifai from 'clarifai';
import {Image, Row, Col} from 'react-bootstrap';

const app = new Clarifai.App({
 apiKey: '2ca0cad8e48c4f23a69afa2ac1bcbfce'
});

class FaceReco extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      input: '',
      box: {},
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
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
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch(err => console.log(err, 'ad'));
  }


  render() {
    const {imageUrl, box} = this.state;
    return (
      <div className="row justify-content-center">
        <div className="card col-10 text-center" style={{ 'margin-top': '15px', 'overflow-y': '800px' }} >
          <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                    <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
                    <div>
                        <div style={{position: 'absolute'}}>
                          <img
                            atl="" id="inputimage" src={imageUrl}
                            width='500px' height='auto'
                            style={{marginTop: '50px'}}/>
                          <div
                            className='bounding-box'
                            style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FaceReco;

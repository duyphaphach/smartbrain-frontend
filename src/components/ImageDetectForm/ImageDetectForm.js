import React from 'react';
import ImageLinkForm from '../ImageLinkForm/imageLinkForm.js';
import {Image, Row, Col} from 'react-bootstrap';

class ImageDetectForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD:src/components/ImageDetectForm/ImageDetectForm.js
      imageUrl: ''
=======
      imageUrl: '',
>>>>>>> ChangeSeStateDemo:src/components/DemoGraphics/demoGraphics.js
    }
  }

  onInputChange = (event) => {
    this.setState({imageUrl: event.target.value});
    console.log('demoGraph');
  }

  render() {
    return (
<<<<<<< HEAD:src/components/ImageDetectForm/ImageDetectForm.js
      <div class="md-form input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Paste image's url here"
          aria-label="Image url"
          aria-describedby="basic-addon2"
          onChange={this.props.onInputChange}/>
        <div class="input-group-append">
          <button class="btn btn-unique waves-effect m-0" type="button">Detect</button>
=======
      <div>
        <div className="row">
          <div className="col-md-5">
            <ImageLinkForm onInputChange={this.onInputChange}/>
            <Image src={this.state.imageUrl} rounded/>
          </div>
          <div className="col-md-4">

          </div>
>>>>>>> ChangeSeStateDemo:src/components/DemoGraphics/demoGraphics.js
        </div>
      </div>
    );
  }
}

export default ImageDetectForm;

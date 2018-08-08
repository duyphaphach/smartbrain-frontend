import React from 'react';
import ImageLinkForm from '../ImageLinkForm/imageLinkForm.js';
import {Image, Row, Col} from 'react-bootstrap';

class DemoGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
    }
  }

  onInputChange = (event) => {
    this.setState({imageUrl: event.target.value});
    console.log('demoGraph');
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-5">
            <ImageLinkForm onInputChange={this.onInputChange}/>
            <Image src={this.state.imageUrl} rounded/>
          </div>
          <div className="col-md-4">

          </div>
        </div>
      </div>
    );
  }
}

export default DemoGraph;

import React from 'react';
import ImageLinkForm from '../ImageLinkForm/imageLinkForm.js';
import {Image, Row, Col} from 'react-bootstrap';

class FaceReco extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
    }
  }

  onInputChange = (event) => {
    this.setState({imageUrl: event.target.value});
  }

  render() {
    const {imageUrl} = this.state;
    return (
      <div>
        <Row>
          <ImageLinkForm onInputChange={this.onInputChange}/>
        </Row>
        <Row>
          <Col xs={12} md={8}>
          <Image src={imageUrl} rounded />
        </Col>
      </Row>
      </div>
    );
  }
}

export default FaceReco;

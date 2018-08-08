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
        <Row>
          <ImageLinkForm onInputChange={this.onInputChange}/>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <Image src={this.state.imageUrl} rounded/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DemoGraph;

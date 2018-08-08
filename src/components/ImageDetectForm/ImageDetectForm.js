import React from 'react';

class ImageDetectForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageUrl: ''
    }
  }

  render() {
    return (
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
        </div>
      </div>
    );
  }
}

export default ImageDetectForm;

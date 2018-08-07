import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';

const ImageLinkForm = ({onInputChange}) => {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            placeholder="Image Url"
            onChange={onInputChange}
            />
          <HelpBlock>Validation is based on string length.</HelpBlock>
          <Button bsStyle="primary">Detect</Button>
        </FormGroup>
      </form>
    );
}

export default ImageLinkForm;

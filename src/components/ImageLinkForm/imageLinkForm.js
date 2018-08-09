import React from 'react';
import './ImageLinkForm.css'
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
      <div className="md-form input-group">
        <input
          type="text"
          className="form-control"
           placeholder="" aria-label=""
            aria-describedby="basic-addon1"
          onChange={onInputChange}/>
        <div className="input-group-prepend">
          <button
            className="btn btn-unique waves-effect m-0"
            type="button"
            onClick={onButtonSubmit}
            >Detect</button>
        </div>
      </div>
      //   <div className='center'>
      //     <div className='form center pa4 br3 shadow-5'>
      //       <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
      //       <button
      //         className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
      //         onClick={onButtonSubmit}
      //       >Detect</button>
      //     </div>
      // </div>
    );
}

export default ImageLinkForm;

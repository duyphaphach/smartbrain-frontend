import React from 'react';
import {Image} from 'react-bootstrap';

const FaceReco = ({imageUrl}) => {
  return (
    <div>
      <Image src={imageUrl} rounded />
    </div>
  );
}

export default FaceReco;

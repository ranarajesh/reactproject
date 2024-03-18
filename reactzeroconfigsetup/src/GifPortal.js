import React from 'react';
import ReactDOM from 'react-dom';

const GifPortal = (props) => {
  
  return ReactDOM.createPortal(
    <img src={ props.gifPath } alt="Gif Portal" width="200" height="200" />,
    document.querySelector('#portal')
  );
};
export default GifPortal;
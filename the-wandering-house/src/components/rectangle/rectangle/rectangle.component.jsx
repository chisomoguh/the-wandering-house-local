import React from 'react';


import './rectangle.style.css';

export const Rectangle = ({height, image_url, onClick, id }) => (

  <div className='rectangle-container' >
    <img
      className='rectangle-picture'
      alt='rectangle'
      src={`https://drive.google.com/uc?export=view&id=${image_url}`}
    
      //src={`https://drive.google.com/uc?export=view&id=${image_url}`}
      // Check this out
      style={{height: `${height}rem`}}
      onClick={onClick}
    />
  </div>
  
);

export default Rectangle;
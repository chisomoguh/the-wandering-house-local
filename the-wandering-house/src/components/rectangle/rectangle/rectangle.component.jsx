import React from 'react';


import './rectangle.style.css';

export const Rectangle = ({height, image_url, onClick, id }) => (

  <div className='rectangle-container' >
    <img
      className='rectangle-picture'
      alt='rectangle'
      src={`https://drive.google.com/uc?export=view&id=1IZHRATXEJgW3DBNU34h9mS2xBfn52K5d`}
    
      //src={`https://drive.google.com/uc?export=view&id=${image_url}`}
      style={{height: `${height}rem`}}
      onClick={onClick}
    />
  </div>
  
);

export default Rectangle;
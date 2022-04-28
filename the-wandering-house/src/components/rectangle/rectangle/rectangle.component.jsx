import React from 'react';


import './rectangle.style.css';

export const Rectangle = ({height, image_url, onClick, id }) => (

  <div className='rectangle-container' >
    <img
      className='rectangle-picture'
      alt='rectangle'
      src='Images/1.jpg'
      style={{width: `${height}%`}}
      onClick={onClick}
    />
  </div>
  
);

export default Rectangle;
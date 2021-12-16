import React from 'react';

import './rectangle.style.css';

export const Rectangle = ({height, image_url, onClick }) => (
  <div className='rectangle-container' >
    <img
      className='rectangle-picture'
      alt='rectangle'
      src={`https://drive.google.com/uc?export=view&id=1TclnPtlTZGKoqydm25HgmBi76gL7PA11`}
      style={{height: `${height}rem`}}
      onClick={onClick}
    />
  </div>
);

export default Rectangle;
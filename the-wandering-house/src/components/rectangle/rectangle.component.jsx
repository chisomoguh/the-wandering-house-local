import React from 'react';

import './rectangle.style.css';

export const Rectangle = ({height}) => (
  <div className='rectangle-container' >
    <img
      alt='rectangle'
      src={`https://drive.google.com/uc?export=view&id=1TclnPtlTZGKoqydm25HgmBi76gL7PA11`}
      style={{height: `${height}rem`}}
    />
  </div>
);

export default Rectangle;
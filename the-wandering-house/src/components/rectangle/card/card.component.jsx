import React from 'react';

import './card.style.css';

export const Card = ({title}) => (
  <div className='card' >
    <h2>{title}</h2>
  </div>
);

export default Card;
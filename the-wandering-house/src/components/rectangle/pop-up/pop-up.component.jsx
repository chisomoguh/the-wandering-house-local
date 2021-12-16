import React from 'react';

import './pop-up.style.css';

export const PopUp = ({ image_url, audio_url, embrioder, title, translation, statement, age, font, onClick }) => (
  <div className='pop-up-div' onClick={onClick} >
    <h2>I open the door to our house and it feels like it is a good place</h2>
  </div>
);

export default PopUp;
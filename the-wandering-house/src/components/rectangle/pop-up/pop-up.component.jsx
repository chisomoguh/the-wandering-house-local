import React from 'react';

import './pop-up.style.css';

export const PopUp = ({ image_url, audio_url, age, statement, translation, title, embroiderer, main_text, onClick}) => (
  <div className='pop-up-div' onClick={onClick}>
     
    <div className='pop-up-container-left'>
        <div className='pop-up-flex-box'>
         <div className='pop-up-flex-column'>

          <img
            alt='rectangle'
            src={`https://drive.google.com/uc?export=view&id=${image_url}`}
            style={{height: '100%'}}
          />
        
          </div>
          <p>Embroiderer: {embroiderer === undefined ? 'Unknown' : embroiderer}</p>
          <audio controls="controls" style={{width: '90%'}} 
              src="https://docs.google.com/uc?export=download&amp;id=1JW1CwDwfs3_HbyYz0JU7VjNj2vs9W4IE">
          </audio>
          <p>{`When this was recorded, the speaker was ${age} years old.`}</p>
        </div>
    </div>

    <div className='pop-up-container-rigth'>
        <h2>{main_text}</h2>
        <h3>Translation</h3>
        <p>{`${translation}`}</p>
        <h3>Statement from the Embroiderer</h3>
        <p className='pop-up-statement-text'>{statement}</p>

    </div>
   
  </div>
);

export default PopUp;
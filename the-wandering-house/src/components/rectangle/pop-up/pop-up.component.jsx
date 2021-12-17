import React from 'react';

import './pop-up.style.css';

export const PopUp = ({ image_url, audio_url, embrioder, title, translation, statement, age, font, onClick }) => (
  <div className='pop-up-div' onClick={onClick}>

    <div className='pop-up-container-left'>
        <div className='pop-up-flex-box'>
         <div className='pop-up-flex-column'>

    
          <img
            alt='rectangle'
            src={`https://drive.google.com/uc?export=view&id=1zx0ZvECZLK3EjW5MBx6u-x69yXnM7lUZ`}
            style={{height: '100%'}}
          />
        
          </div>
          <p>Embroiderer: Cindy Starkey Robinson</p>
          <audio controls="controls" style={{width: '90%'}} 
              src="https://docs.google.com/uc?export=download&amp;id=1JW1CwDwfs3_HbyYz0JU7VjNj2vs9W4IE">
          </audio>
          <p>When this was recorded, the speaker was 6 years old.</p>
        </div>
    </div>

    <div className='pop-up-container-rigth'>
        <h2>I open the door to our house and it feels like it is a good place</h2>
        <h2>Translation</h2>
        <p className='pop-up-statement-text'>This phrase brought me memories of my own childhood, with calls of “ready or not, here I come” and “you’re it” ringing through the neighborhood until mothers called the children in for supper. We played hopscotch and complicated jump rope rhymes, organized a game of neighborhood kickball—thinking of these sounds makes me feel safe and part of my community.</p>

    </div>
   
  </div>
);

export default PopUp;
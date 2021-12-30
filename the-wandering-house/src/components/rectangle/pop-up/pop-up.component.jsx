import React from 'react';

import './pop-up.style.css';

export const PopUp = ({ image_url, audio_url, age, statement, translation, embroiderer, main_text, main_font, onClick}) => (
  
  <div className='pop-up-div' onClick={onClick}>
     
    <div className='pop-up-container-left'>
        <div className='pop-up-flex-box'>
         <div className='pop-up-flex-column'>

          <img
            alt='rectangle'
            src={`https://drive.google.com/uc?export=view&id=${image_url}`}
            style={{height: '100%'}}
            className='pop-up-img'
          />
        
          </div>
          <p style={{fontWeight: 'bold'}}>Embroiderer: {embroiderer}</p>
          <audio controls="controls" style={{width: '90%'}} 
              src={`https://docs.google.com/uc?export=download&id=${audio_url}`}>
          </audio>
          <p><i>{`At the time of the recording in 2019 the speaker was ${age} years old`}</i></p>
        </div>
    </div>

    <div className='pop-up-container-right'>
        <div className='main-text' style={{ fontFamily: `${main_font}`}}><h2>{main_text}</h2></div>
        <div className='translation' style={{ fontFamily: `${main_font}`}}><h4>{`${translation}`}</h4></div>

        { statement === undefined ?
         null 
        :
        <p className='pop-up-by-embroiderer-text'>{`Statement by ${embroiderer}:`}</p> }

        <p className='pop-up-statement-text'>{statement}</p>
       

    </div>
   
  </div>
);

export default PopUp;
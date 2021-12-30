import React from 'react';

import './main-page.css';

export const MainPage = ({onClick}) => (
  
  <div className='main-page-div'>
    <div className='main-page-container'>
      <div className='main-page-title'>Welcome to the Wandering House</div>
      <div className='main-page-text'>
        <p>
          Comprised of 49 embroidered sentences, the Northfield Community Quilt is one of several works coming out of The Wandering House,
            a multi-platform project by Chilean-American filmmaker and artist, Cecilia Cornejo Sotelo. Featuring an ice-fishing house retrofitted 
            as a mobile audio recording studio, The Wandering House examines notions of home from the perspective of rural and semi-rural towns in 
            southern Minnesota.
        </p>
        <p>
          Click on any piece of this interactive version of the Northfield Community Quilt and you will be able to listen to the sentence recorded 
            anonymously in 2019 as well as to read a short statement by the person who, a year later, embroidered it. The Lanesboro Community Quilt is 
            currently in the works and will be exhibited at Lanesboro Arts in early 2022. Its interactive counterpart is also upcoming, so stay tuned! <a>Read More...</a>
        </p>
      </div>

      <div className='main-page-pics'>
        <img
              alt='Bridge Square Picture'
              src={`https://drive.google.com/uc?export=view&id=1nFn7O2-Xbl0-_ghUj8-sIv4l_Xr6xNOy`}
              style={{width: '100%'}}
            />
        <img
              alt='Sergio Picture'
              src={`https://drive.google.com/uc?export=view&id=11VMzINfOPNogh_oSb7YA0bZ8wLr1wP4L`}
              style={{width: '100%'}}
            />  
      </div>

      <button className='main-page-button' onClick={onClick}>
        Explore Quilt
      </button>
     </div>
  </div>
);

export default MainPage;
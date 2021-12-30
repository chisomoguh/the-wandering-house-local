import React from 'react';

import './main-page.css';

export const MainPage = ({onClick}) => (
  
  <div className='main-page-div'>
    <button onClick={onClick}>
      Explore Quilt
    </button>
     
   
  </div>
);

export default MainPage;
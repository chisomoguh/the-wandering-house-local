import React, {Component} from 'react';
import Rectangle from './components/rectangle/rectangle/rectangle.component'
import Card from './components/rectangle/card/card.component.jsx'
import PopUp from './components/rectangle/pop-up/pop-up.component.jsx'
import './App.css';

class App extends Component {
constructor(props) {
  super(props);
  this.state = { 
    width: 0, 
    height: 0, 
    showPopUp: false,
    popUpId: 0,
    pictures: []
  };
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  this.getPictures = this.getPictures.bind(this);
  this.activePopUp = this.activePopUp.bind(this);
  this.hidePopUp = this.hidePopUp.bind(this);
  this.handleClickChildElement = this.handleClickChildElement.bind(this);
  this.cleanImageUrl = this.cleanImageUrl.bind(this);
}

componentDidMount() {
  this.updateWindowDimensions();
  this.getPictures();
  window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
  this.setState({ width: window.innerWidth, height: window.innerHeight });
}


getPictures (){

  let temp_pictures=[]

  fetch('https://api.airtable.com/v0/appjPLcxTlXQZZfMa/tblZ9LuBa045zY0lw?fields%5B%5D=ID&fields%5B%5D=Image+Link', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer keyFiXILZhl7sQLsn'
    }
  })
  .then(response => response.json())
  .then(response => {response.records.map(record => 
    temp_pictures.push({id: record.fields["ID"], image_url: record.fields["Image Link"]})); return temp_pictures} )
  .then(pictures_list => this.setState({ pictures: pictures_list }));

}

cleanImageUrl(image_url){
  const url_sections = image_url.split('/');
  console.log(url_sections[5])
  return url_sections[5]

}

activePopUp (){
  this.setState({ showPopUp: true });
  console.log('show pop up');

}

hidePopUp(){
  this.setState({ showPopUp: false });
  console.log('hide pop up')
}

handleClickChildElement (event){
    event.stopPropagation();
    console.log('handleChildClick');
}

render() {

  
  // making a random comment
  const rectangles_measuments_top_container = {1:9, 2:7, 3:7, 4:7, 5:7, 6:7, 8:7, 9:7, 10:9}

  if (this.state.width > 500){
    return(

      <div className='home-div'>
        <div className='main-container'>
          <div className='blue-line'></div>
          <div className='main-title-div'><h1 className='main-title' >I know I am home when...</h1></div>
                
                <div className="top-container">

                    
                      {
                      this.state.pictures.map(picture => (
                      //console.log(`${rectangles_measuments_top_container}.${picture.id}`)
                      <Rectangle key={picture.id} height={'10'} onClick={this.activePopUp} image_url={this.cleanImageUrl(picture.image_url)} id={picture.id}/>
                      )
                      )
                      }

                </div>

                <div className="left-container">

                </div>

                <div className="middle-container">

                </div>

                <div className="right-container">

                </div>

                <div className="bottom-container">
                  <div>
                      <Card title={'THE WANDERING HOUSE'} />
                      <div className='blue-line-bottom'></div>
                  </div>
                 
                  <div className="stairs-container">
                        <div className='stair-step' style={{height: '14px', width: '30%'}}></div>
                        <div className='stair-step' style={{height: '17px', width: '40%'}}></div>
                        <div className='stair-step' style={{height: '20px', width: '55%'}}></div>
                  </div>

                  <div>
                      <Card title={'NORTHFIELD 2019-2020'} />
                      <div className='blue-line-bottom'></div>
                  </div>
                </div>
        
        </div>


        { this.state.showPopUp === true ? 
        <div className="pop-up-container" onClick={this.hidePopUp}>
          <PopUp onClick={this.handleClickChildElement}/>
        </div>
        : console.log('baf') }
        
      </div>


    );
  }

  else{

    return (
      <div className='App'>
      
      <Rectangle height={20} width={34}/>
       Phone
      </div>
    );

  }

  
}

}

export default App;

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
    popUpInfo: {},
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
  fetch('https://api.airtable.com/v0/appjPLcxTlXQZZfMa/tblZ9LuBa045zY0lw?fields%5B%5D=ID&fields%5B%5D=Image+Link+Low+Quality', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer keyFiXILZhl7sQLsn'
    }
  })
  .then(response => response.json())
  .then(response => {response.records.map(record => 
    temp_pictures.push({id: record.fields["ID"], image_url: record.fields["Image Link Low Quality"]})); return temp_pictures} )
  .then(pictures_list => this.setState({ pictures: pictures_list }));

}

getPopUpInfo(id){
  console.log('this is get pop uo info')

  let temp_dict = 0
  fetch(`https://api.airtable.com/v0/appjPLcxTlXQZZfMa/tblZ9LuBa045zY0lw?fields%5B%5D=Translation&fields%5B%5D=ID&fields%5B%5D=Embroiderer&fields%5B%5D=Main+Text&fields%5B%5D=Translation&fields%5B%5D=Statement&fields%5B%5D=Age&fields%5B%5D=Image+Link+Low+Quality&fields%5B%5D=Audio+Link&filterByFormula=ID%3D${id}`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer keyFiXILZhl7sQLsn'
    }
  })
  .then(response => response.json())
  .then(response => {console.log(response) ; return(response)})
  
  .then(popUpAttributes => { temp_dict = { translation: popUpAttributes.records[0].fields.Translation,
                                                          image_url: popUpAttributes.records[0].fields["Image Link Low Quality"],
                                                          main_text: popUpAttributes.records[0].fields["Main Text"],
                                                          statement: popUpAttributes.records[0].fields.Statement,
                                                          age: popUpAttributes.records[0].fields.Age,
                                                          embroiderer: popUpAttributes.records[0].fields.Embroiderer,
                                                          audio_url :popUpAttributes.records[0].fields["Audio Link"]
                                                        }; console.log(`This as ${popUpAttributes}`); return temp_dict})

  .then(popUpInfoDict => this.setState({ popUpInfo: popUpInfoDict}));
}

cleanImageUrl(image_url){
  const url_sections = image_url.split('/');
  return url_sections[5]

}

activePopUp (pictureId){
  // When the user clicks on a rectangle, console log the id of the rectangle and update popUpId
  this.setState({ showPopUp: true });
  // this.setState({ popUpId: pictureId });
  //console.log(`show picture id ${pictureId}`);
  this.getPopUpInfo(pictureId);

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
  
  const { image_url, audio_url, age, statement, translation, title, embroiderer, main_text } = this.state.popUpInfo;
  
  console.log(this.state.popUpInfo);
  const rectangles_measuments_top_container = {1:9, 2:7, 3:7, 4:7, 5:7, 6:7, 8:7, 9:7, 10:9}
  // [] -> index == id - 1 
  // [{}, ] index == id -1 { id: 1, heigth: 9}

  if (this.state.width > 500){
    return(

      <div className='home-div'>
        <div className='main-container'>
          <div className='blue-line'></div>
          <div className='main-title-div'><h1 className='main-title' >I know I am home when...</h1></div>
                
                <div className="top-container">

                    
                      {
                      this.state.pictures.map(picture => (
                        
                      <Rectangle key={picture.id} height={'7'} onClick={() => this.activePopUp(picture.id)}  image_url={picture.image_url} id={picture.id}/>)
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
          <PopUp onClick={this.handleClickChildElement}  image_url={image_url} audio_url={audio_url} translation={translation} statement={statement} title={title} age={age} main_text={main_text} embroiderer={embroiderer}/>
        </div>
        : null}
        
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

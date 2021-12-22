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

chooseRandomFont() {
  let fontList = ['Kranky', 'Caveat', 'Shadows into Light Two', 'Architects Daughter', 'Fuzzy Bubbles', 'Lobster Two', 'Indie Flower', 'Patrick Hand', 'Cormorant Upright']
  const randomIndex = Math.floor(Math.random() * fontList.length);
  const choosedFont = fontList[randomIndex];
  return choosedFont;
}

getPictures (){
  let temp_pictures=[]
  fetch('https://api.airtable.com/v0/appjPLcxTlXQZZfMa/tblZ9LuBa045zY0lw?fields%5B%5D=ID&fields%5B%5D=Image+Link+Low+Quality&sort%5B0%5D%5Bfield%5D=ID&sort%5B0%5D%5Bdirection%5D=asc', {
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
  console.log('this is get pop up info')

  let temp_dict = 0
  fetch(`https://api.airtable.com/v0/appjPLcxTlXQZZfMa/tblZ9LuBa045zY0lw?fields%5B%5D=Translation&fields%5B%5D=ID&fields%5B%5D=Embroiderer&fields%5B%5D=Main+Text&fields%5B%5D=Translation&fields%5B%5D=Statement&fields%5B%5D=Age&fields%5B%5D=Image+Link+Low+Quality&fields%5B%5D=Audio+Link&filterByFormula=ID%3D${id}`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer keyFiXILZhl7sQLsn'
    }
  })
  .then(response => response.json())
  .then(popUpAttributes => { temp_dict = { translation: popUpAttributes.records[0].fields.Translation,
                                                          image_url: popUpAttributes.records[0].fields["Image Link Low Quality"],
                                                          main_text: popUpAttributes.records[0].fields["Main Text"],
                                                          statement: popUpAttributes.records[0].fields.Statement,
                                                          age: popUpAttributes.records[0].fields.Age,
                                                          embroiderer: popUpAttributes.records[0].fields.Embroiderer,
                                                          audio_url :popUpAttributes.records[0].fields["Audio Link"],
                                                          main_font: this.chooseRandomFont()
                                                        }; console.log(`Pop up attributes: ${popUpAttributes}`); return temp_dict})

  .then(popUpInfoDict => this.setState({ popUpInfo: popUpInfoDict}));
}

cleanImageUrl(image_url){
  const url_sections = image_url.split('/');
  return url_sections[5]

}

activePopUp (pictureId){
  this.setState({ showPopUp: true });
  this.getPopUpInfo(pictureId);
  console.log('active pop up')

}

hidePopUp(){
  this.setState({ showPopUp: false });
  this.setState({ popUpInfo: {} });
}

handleClickChildElement (event){
    event.stopPropagation();
}

render() {
  
  const { image_url, audio_url, age, statement, translation, embroiderer, main_text, main_font} = this.state.popUpInfo;


  const rectangles_measuments= [{}, {id:1, height:70}, {id:2, height:90}, {id:3, height:90}, {id:4, height:90}, {id:5, height:90}, {id:6, height:90}, {id:7, height:90}, {id:8, height:90}, {id:9, height:70}, 
                                {id:10, height:6},{id:11, height:6}, {id:12, height:6}, {id:13, height:6}, {id:14, height:6}, {id:15, height:6}, {id:16, height:6}, {id:17, height:6}, {id:18, height:6}, {id:19, height:6}, {id:20, height:6},
                                {id:21, height:90}, {id:22, height:6}, {id:23, height:6}, {id:24, height:6}, {id:25, height:5}, {id:26, height:6}, {id:27, height:6}, {id:28, height:6}, {id:29, height:6}, 
                                {id:30, height:90},{id:31, height:90}, {id:32, height:90}, {id:33, height:90}, {id:34, height:90}, {id:35, height:90}, 
                                {id:36, height:85}, {id:37, height:85}, {id:38, height:85}, 
                                {id:39, height:85}, {id:40, height:85},
                                {id:41, height:75}, {id:42, height:90}, {id:43, height:90}, {id:44, height:88}, {id:45, height:97}, {id:46, height:75}, {id:47, height:97}, {id:48, height:88}, {id:49, height:75}, {id:50, height:90}]

  if (this.state.width > 700){
    return(

      <div className='home-div'>
        <div className='main-container'>
          <div className='blue-line'></div>
          <div className='main-title-div'><h1 className='main-title' >I know I am home when...</h1></div>
                
                <div className="top-container">
                      {this.state.pictures.filter(picture => picture.id <= 9).map(picture => (
                      <Rectangle key={picture.id} height={rectangles_measuments[picture.id].height} onClick={() => this.activePopUp(picture.id)}  image_url={picture.image_url} id={picture.id}/>))}

                </div>
                
                <div className='main-container-grid'>
                    <div className="left-container">
                      {this.state.pictures.filter(picture => picture.id >= 10 &&  picture.id <= 19).map(picture => (
                      <Rectangle key={picture.id} height={'90'} onClick={() => this.activePopUp(picture.id)}  image_url={picture.image_url} id={picture.id}/>))}

                    </div>
                    
                    <div className='vertical-blue-line'></div>

                    <div className="middle-container">

                          <div className="first-row-middle-container">
                            {this.state.pictures.filter(picture => picture.id >= 30 &&  picture.id <= 35).map(picture => (
                            <Rectangle key={picture.id} height={rectangles_measuments[picture.id].height} onClick={() => this.activePopUp(picture.id)}  image_url={picture.image_url} id={picture.id}/>))}
                          </div>
                          <div className="second-row-middle-container">
                            {this.state.pictures.filter(picture => picture.id >= 36 &&  picture.id <= 38).map(picture => (
                            <Rectangle key={picture.id} height={rectangles_measuments[picture.id].height} onClick={() => this.activePopUp(picture.id)}  image_url={picture.image_url} id={picture.id}/>))}
                          </div>

                          <div className="third-row-middle-container">
                              <div className="first-sub-row-middle-container">
                                    <div className="first-sub-row-flex">
                                    {this.state.pictures.filter(picture => picture.id === 39 ||  picture.id === 40 ).map(picture => (
                                    <Rectangle key={picture.id} height={rectangles_measuments[picture.id].height} onClick={() => this.activePopUp(picture.id)}  image_url={picture.image_url} id={picture.id}/>))}
                                    </div>

                                    <div className="second-sub-row-flex">
                                    {this.state.pictures.filter(picture => picture.id === 44 ||  picture.id === 45).map(picture => (
                                    <Rectangle key={picture.id} height={rectangles_measuments[picture.id].height} onClick={() => this.activePopUp(picture.id)}  image_url={picture.image_url} id={picture.id}/>))}
                                    </div>
                              </div>

                              <div className="second-sub-row-middle-container">
                                    {this.state.pictures.filter(picture => picture.id === 41 ).map(picture => (
                                    <Rectangle key={picture.id} height={rectangles_measuments[picture.id].height} onClick={() => this.activePopUp(picture.id)}  image_url={picture.image_url} id={picture.id}/>))}
                                    <div>
                                      {/* Add window here */}
                                    </div>
                                    {this.state.pictures.filter(picture => picture.id === 46).map(picture => (
                                    <Rectangle key={picture.id} height={rectangles_measuments[picture.id].height} onClick={() => this.activePopUp(picture.id)}  image_url={picture.image_url} id={picture.id}/>))}
                                     <div>
                                      {/* Add window here */}
                                    </div>
                                    {this.state.pictures.filter(picture => picture.id === 49).map(picture => (
                                    <Rectangle key={picture.id} height={rectangles_measuments[picture.id].height} onClick={() => this.activePopUp(picture.id)}  image_url={picture.image_url} id={picture.id}/>))}
                                   
                              </div>

                              <div className="third-sub-row-middle-container">
                                  <div className="first-sub-row-flex">
                                      {this.state.pictures.filter(picture => picture.id === 42 ||  picture.id === 43 ).map(picture => (
                                      <Rectangle key={picture.id} height={rectangles_measuments[picture.id].height} onClick={() => this.activePopUp(picture.id)}  image_url={picture.image_url} id={picture.id}/>))}
                                    </div>

                                  <div className="second-sub-row-flex">
                                      {this.state.pictures.filter(picture => picture.id === 47 ||  picture.id === 48).map(picture => (
                                      <Rectangle key={picture.id} height={rectangles_measuments[picture.id].height} onClick={() => this.activePopUp(picture.id)}  image_url={picture.image_url} id={picture.id}/>))}
                                  </div>
                              </div>
                          </div>
                    </div>

                    <div className='vertical-blue-line'></div>
                    
                    <div className="right-container">
                      {this.state.pictures.filter(picture => picture.id >= 20 &&  picture.id <= 29).map(picture => (
                      <Rectangle key={picture.id} height={'90'} onClick={() => this.activePopUp(picture.id)}  image_url={picture.image_url} id={picture.id}/>))}
                    </div>
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
          <PopUp onClick={this.handleClickChildElement}  image_url={image_url} audio_url={audio_url} translation={translation} statement={statement}  age={age} main_text={main_text} embroiderer={embroiderer} main_font={main_font}/>
        </div>
        : null}
      </div>
    );
  }

  else{

    return (
      <div className='main-container-phone'>
        <div className='main-sub-container-phone'>
        <div className='main-title-div'><h1 className='main-title' >I know I am home when...</h1></div>
        <div className='blue-line'></div>
          <div className='first-container-grid-phone'>
            {this.state.pictures.filter(picture => picture.id === 1 ||  picture.id === 9).map(picture => (
            <Rectangle key={picture.id} height={90} onClick={() => this.activePopUp(picture.id)}  image_url={picture.image_url} id={picture.id} phone={true}/> ))}
          </div>

          <div className='first-container-grid-phone'>
            {this.state.pictures.filter(picture => picture.id >= 2 &&  picture.id <= 24 && picture.id !== 9).map(picture => (
            <Rectangle key={picture.id} height={90} onClick={() => this.activePopUp(picture.id)}  image_url={picture.image_url} id={picture.id} phone={true}/>))}
          </div>

          <div className=''>
            {this.state.pictures.filter(picture => picture.id === 37).map(picture => (
            <Rectangle key={picture.id} height={90} onClick={() => this.activePopUp(picture.id)}  image_url={picture.image_url} id={picture.id} phone={true}/>))}
          </div>
            
          <div className='first-container-grid-phone'>
          {this.state.pictures.filter(picture => picture.id >= 26 &&  picture.id <= 46 && picture.id !== 37  && picture.id !== 41 && picture.id !== 44 ).map(picture => (
          <Rectangle key={picture.id} height={90} onClick={() => this.activePopUp(picture.id)}  image_url={picture.image_url} id={picture.id} phone={true}/>))}
          </div>

          <div className='first-container-grid-phone'>
            {this.state.pictures.filter(picture => picture.id === 25 || picture.id === 28).map(picture => (
            <Rectangle key={picture.id} height={80} onClick={() => this.activePopUp(picture.id)}  image_url={picture.image_url} id={picture.id} phone={true}/>))}
          </div>

          <div className='first-container-grid-phone'>
            {this.state.pictures.filter(picture => picture.id === 47 || picture.id === 29).map(picture => (
            <Rectangle key={picture.id} height={90} onClick={() => this.activePopUp(picture.id)}  image_url={picture.image_url} id={picture.id} phone={true}/>))}
          </div>

          <div className='first-container-grid-phone'>
            {this.state.pictures.filter(picture => picture.id === 44 || picture.id === 48).map(picture => (
            <Rectangle key={picture.id} height={70} onClick={() => this.activePopUp(picture.id)}  image_url={picture.image_url} id={picture.id} phone={true}/>))}
          </div>

          <div className='first-container-grid-phone'>
            {this.state.pictures.filter(picture => picture.id === 41 || picture.id === 49).map(picture => (
            <Rectangle key={picture.id} height={90} onClick={() => this.activePopUp(picture.id)}  image_url={picture.image_url} id={picture.id} phone={true}/>))}
          </div>
          { this.state.showPopUp === true ? 
        <div className="pop-up-container" onClick={this.hidePopUp}>
          <PopUp onClick={this.handleClickChildElement}  image_url={image_url} audio_url={audio_url} translation={translation} statement={statement}  age={age} main_text={main_text} embroiderer={embroiderer} main_font={main_font}/>
        </div>
        : null}

        <div>
            <Card title={'THE WANDERING HOUSE'} />
            <Card title={'NORTHFIELD 2019-2020'} />
            <div className='blue-line-bottom'></div>
        </div>
        </div>

       
        
      
      </div>
    );

  }

  
}

}

export default App;

import React, {Component} from 'react';
import Rectangle from './components/rectangle/rectangle.component'
import './App.css';

class App extends Component {
constructor(props) {
  super(props);
  
  this.state = { width: 0, height: 0 };
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
  this.setState({ width: window.innerWidth, height: window.innerHeight });
}

render() {

  const rectangles_id_measuments = [{id:1, height:'9'}, {id:2 , height:'9'}, {id:3, height:'9'}]

  if (this.state.width > 500){
    return(

      <div className='home-div'>
        <div className='main-container'>
          <div className='blue-line'></div>
          <div className='main-title-div'><h1 className='main-title'>I know I am home when...</h1></div>
                <div className="top-container">
                    {rectangles_id_measuments.map(rectangle => (
                    <Rectangle key={rectangle.id} height={rectangle.height} />
                    ))}

                </div>

                <div className="left-container">

                </div>

                <div className="middle-container">

                </div>

                <div className="right-container">

                </div>
        
        </div>
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

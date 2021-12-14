import React, {Component} from 'react';
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

  if (this.state.width > 500){
    return(

      <div>
        Computer
      </div>


    );
  }

  else{

    return (
      <div className='App'>
       Width: {this.state.width} - 
       Phone
      </div>
    );

  }

  
}

}

export default App;

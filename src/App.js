import React, { Component } from 'react';
import './App.css';
import { loadGoogleMaps } from './utils.js';

class App extends Component {
  
  // load Google Maps
  componentDidMount() {
    let googleMapsPromise = loadGoogleMaps();
    
    Promise.all([
      googleMapsPromise
      ])
      .then(values => {
        console.log(values);
      })
  }

  render() {
    return (
      <div className="App">
        
        <header>
          <p>Culinary Kiel</p>
        </header>

        <div id='map'>

        </div>
        
      </div>
    );
  }
}

export default App;

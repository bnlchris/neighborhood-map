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

        // Google Maps data
        let google = values[0];

        this.google = google;
        this.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          scrollwheel: true,
          center: { lat: 54.306824, lng: 10.125558 }
      })
    })
  }

  render() {
    return (
      <div className="App">
        
        <header>
          <h1>Culinary Kiel</h1>
        </header>

        <div id='map'>

        </div>
        
      </div>
    );
  }
}

export default App;

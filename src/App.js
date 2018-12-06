import React, { Component } from 'react';
import './App.css';
import { loadGoogleMaps, loadFoursquarePlaces } from './utils.js';

class App extends Component {
  
  // load Google Maps
  componentDidMount() {
    let googleMapsPromise = loadGoogleMaps();
    let foursquarePromise = loadFoursquarePlaces();
    
    Promise.all([
      googleMapsPromise,
      foursquarePromise
      ])
      .then(values => {
        
        console.log(values);

        // Google Maps data
        let google = values[0];

        this.google = google;
        this.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          scrollwheel: true,
          center: { lat: 54.306824, lng: 10.125558 }
      })

        // load markers
        let venues = values[1].response.venues;
        // list of markers (to map over them)
        this.markers = [];

        venues.forEach(venue => {
          let marker = new google.maps.Marker({
            position: { lat: venue.location.lat, lng: venue.location.lng },
            map: this.map,
            venue: venue,
            id: venue.id,
            name: venue.name,
            animation: google.maps.Animation.DROP
          });
          // push each marker to list of markers
          this.markers.push(this.markers);
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

        <div id='sidebar'>

        </div>
        
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { loadGoogleMaps, loadFoursquarePlaces } from './utils.js';

class App extends Component {
  
  // constructor to set state
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

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
        // variable for infowindow
        this.infowindow = new google.maps.InfoWindow();

        venues.forEach(venue => {
          let marker = new google.maps.Marker({
            position: { lat: venue.location.lat, lng: venue.location.lng },
            map: this.map,
            venue: venue,
            id: venue.id,
            name: venue.name,
            animation: google.maps.Animation.DROP
          });

          // Set animation for selected marker
          marker.addListener('click', () => {
          if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
          } else { marker.setAnimation(google.maps.Animation.BOUNCE);
          } setTimeout(() => { marker.setAnimation(null) }, 1500);
        });

          // Create infowindow for selected marker 

          // push each marker to list of markers
          this.markers.push(marker);
        })

    })

  }

  //method to filter my venue in the input field
  filterVenues(query) {
    
    this.markers.forEach(marker => {
      if (marker.name.toLowerCase().includes(query.toLowerCase())) {
        marker.setVisible(true);
      } else {
        marker.setVisible(false);
      }
    })

    this.setState({query});
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
          <input value={this.state.query} onChange={(event) => {this.filterVenues(event.target.value)}}/>
        </div>
        
      </div>
    );
  }
}

export default App;

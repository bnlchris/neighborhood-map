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
        this.venues = values[1].response.venues;
        // list of markers (to map over them)
        this.markers = [];
        // variable for infowindow
        this.infowindow = new google.maps.InfoWindow();

        this.venues.forEach(venue => {
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
          } setTimeout(() => { marker.setAnimation(null) }, 2000);
        });

          // Create infowindow for selected marker
          google.maps.event.addListener(marker, 'click', () => {
            this.infowindow.setContent(marker.name);
            this.map.setCenter(marker.position);
            this.infowindow.open(this.map, marker);
            this.map.panBy(0, -125);
          })

          // push each marker to list of markers
          this.markers.push(marker);
        })

        this.setState({filteredListOfVenues: this.venues});
    })

  }

  // method to filter my venue in the input field
  filterVenues(query) {

    // show only places in the list that match the query in the input field
    let filteredQuery = this.venues.filter(venue => venue.name.toLowerCase().includes(query.toLowerCase()));
    
    // show only markers for filtered places
    this.markers.forEach(marker => {
      if (marker.name.toLowerCase().includes(query.toLowerCase())) {
        marker.setVisible(true);
      } else {
        marker.setVisible(false);
      }
    })

    this.setState({filteredListOfVenues: filteredQuery, query});
  }

  // method to animate marker when item on list is clicked
  showMarker = (venue) => {
    let marker = this.markers.filter(m => m.id === venue.id)[0];
    this.infowindow.setContent(marker.name);
    this.map.setCenter(marker.position);
    this.infowindow.open(this.map, marker);
    this.map.panBy(0, -125);
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
          <input className='searchField' placeholder='Filter by name' value={this.state.query} onChange={(event) => {this.filterVenues(event.target.value)}}/>
          {
            this.state.filteredListOfVenues && this.state.filteredListOfVenues.length > 0 && this.state.filteredListOfVenues.map((venue, index) => (
              <div key={index} className='listOfPlaces' onClick={() => {this.showMarker(venue)}}>
                {venue.name}
              </div>
            ))
          }
        </div>
        
      </div>
    );
  }
}

export default App;

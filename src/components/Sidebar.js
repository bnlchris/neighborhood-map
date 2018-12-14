import React, { Component } from 'react';

class Sidebar extends Component {

	  render() {
	  	return (
	  		<div id='sidebar' aria-label='Sidebar'>

	          <input className='searchField' placeholder='Filter by name' value={this.props.query} onChange={(event) => {this.props.filterVenues(event.target.value)}}/>
	          {
	            this.props.filteredListOfVenues && this.props.filteredListOfVenues.length > 0 && this.props.filteredListOfVenues.map((venue, index) => (
	              <div key={index} tabIndex='0' className='listOfPlaces' onClick={() => {this.props.showMarker(venue)}}>
	                {venue.name}
	              </div>
	            ))
	          }
        	</div>
	  	);
	  }

}

export default Sidebar;
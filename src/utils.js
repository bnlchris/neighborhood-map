// function to load Google Maps, credit to Ryan Waite: https://www.youtube.com/watch?v=5J6fs_BlVC0&feature=youtu.be
export function loadGoogleMaps() {
	return new Promise(function(resolve, reject) {
		// run this when Google Maps is loaded
		window.resolveGoogleMapsPromise = function() {
			// resolve Google object
			resolve(window.google);
			// after that, delete callback
			delete window.resolveGoogleMapsPromise;
		}

		// Load Google Maps API
		const script = document.createElement('script');
		script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCxZQ-z1otgbq-sDzm1ASKQ5TTdquwXu34&callback=resolveGoogleMapsPromise';
		// Make sure, API is loaded asynchronously
		script.async = true;
		document.body.appendChild(script);
	})
}

// function to load places from Foursquare
export function loadFoursquarePlaces() {
	// use API
	const foursquareAPI = 'https://api.foursquare.com/v2/venues/search?client_id=E5CSHAOVG3VNBQFQBSZ0NS44BNEYP3ANKMUUK3LF4YF3ACO0&client_secret=RZG114RYPZYH0CQBBU1CHFPEDIG0N0J4S0PBJFW4VCYPBIRI&limit=10&near=Kiel&querypizza&v=20181206';
	return fetch(foursquareAPI).then(resp => resp.json())
}
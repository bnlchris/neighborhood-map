export default function startServiceWorker() {

	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/sw.js', {scope: '/'})
		.then(function(reg) {
			console.log('Service Worker: Registration successful', reg);
		})
		.catch(function(error) {
			console.log('Service Worker: Registration failed with ' + error);
		});
	}

}
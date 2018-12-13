// Install Service Worker
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open('myCache')
      .then(function(cache) {
        console.log('Caching ...', urlsToCache);
        return cache.addAll(urlsToCache);
      })
  );
});

// Array for files to be cached
let urlsToCache = [
    '/'
];

// Service Worker should return requests with cache, otherwise fetch data from network
self.addEventListener('fetch', function(event) {
    // prevent default fetch event
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // if request URL in cache, use it
                if (response) {
                    console.log('URL used from cache')
                    return response;
                }
                // if not, fetch from network
                console.log('Network request');
                return fetch(event.request); 
            })
        )
})

// Check for old Service Workers and delete them
self.addEventListener('activate', function(event) {

  const cacheWhitelist = ['myCache'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

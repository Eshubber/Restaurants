self.addEventListener('install', function(event) {
  //

  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './restaurant.html',
        './restaurant.html?id=1',
        './restaurant.html?id=2',
        './restaurant.html?id=3',
        './restaurant.html?id=4',
        './restaurant.html?id=5',
        './restaurant.html?id=6',
        './restaurant.html?id=7',
        './restaurant.html?id=8',
        './restaurant.html?id=9',
        './restaurant.html?id=10',
        './css/styles.css',
        './js/main.js',
        './js/restaurant_info.js',
        './js/indexController.js',
        './js/dbhelper.js',
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.jpg',
        './img/5.jpg',
        './img/6.jpg',
        './img/7.jpg',
        './img/8.jpg',
        './img/9.jpg',
        './img/10.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  // TODO: respond to requests for the root page with
  // the page skeleton from the cache
  var requestURL = new URL(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) return response;
      return fetch(event.request);
    })
  );
});
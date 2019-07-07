self.addEventListener('install', function(event) {
  // TODO: cache /skeleton rather than the root page

  event.waitUntil(
    caches.open('restaurants-reviews-v1').then(function(cache) {
      return cache.addAll([
        '../index.html',
        '../restaurant.html',
        '../restaurant.html?id=1',
        '../restaurant.html?id=2',
        '../restaurant.html?id=3',
        '../restaurant.html?id=4',
        '../restaurant.html?id=5',
        '../restaurant.html?id=6',
        '../restaurant.html?id=7',
        '../restaurant.html?id=8',
        '../restaurant.html?id=9',
        '../restaurant.html?id=10',
        '../css/styles.css',
        '../img/1.jpg',
        '../img/2.jpg',
        '../img/3.jpg',
        '../img/4.jpg',
        '../img/5.jpg',
        '../img/6.jpg',
        '../img/7.jpg',
        '../img/8.jpg',
        '../img/9.jpg',
        '../img/10.jpg',
        'main.js',
        'restaurant_info.js',
        'dbhelper.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {

  const requestURL = new URL(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
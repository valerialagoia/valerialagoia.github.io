const FILES_TO_CACHE = [
  '/cmr',
  '/cmr/js/roulette.js',
  '/cmr/style/style.css'
];
const CACHE_NAME = 'cmr-cache';

self.addEventListener('install', function (evt) {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  )
});

self.addEventListener('fetch', function (evt) {

  evt.respondWith(
    caches.match(evt.request).then(function (response) {
      return response || fetch(evt.request);
    })
  )
});
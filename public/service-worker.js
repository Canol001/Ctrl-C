// A simple service worker for caching assets
const CACHE_NAME = 'code-sharing-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/view.html',
  '/style.css',
  '/script.js',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Return the cached version if available, else fetch from network
      return response || fetch(event.request);
    })
  );
});

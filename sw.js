const CACHE_NAME = 'rutas-optimas-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Se instala el Service Worker y guarda en caché los archivos base
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Intercepta las peticiones de red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Devuelve la versión en caché o hace la petición a internet
        return response || fetch(event.request);
      })
  );
});

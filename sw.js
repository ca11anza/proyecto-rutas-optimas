const CACHE_NAME = 'rutas-optimas-v2'; // Cambiamos la versión para forzar actualización
const urlsToCache = [
  './index.html',
  './manifest.json',
  './icon.png'
];

// Se instala el Service Worker de forma segura
self.addEventListener('install', event => {
  self.skipWaiting(); // Fuerza a que la nueva versión se active de inmediato, destrabando instalaciones pendientes
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.log('Error de caché ignorado para permitir instalación:', err))
  );
});

// Limpia el caché viejo si actualizas la app
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Intercepta las peticiones (Estrategia: Network First / Red Primero)
self.addEventListener('fetch', event => {
  event.respondWith(
    // Intenta descargar la versión más reciente de internet
    fetch(event.request).catch(() => {
      // Si no hay internet (o falla), devuelve la versión guardada en caché
      return caches.match(event.request);
    })
  );
});

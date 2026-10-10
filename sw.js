const CACHE_NAME = 'flaskelista-v34';
const APP_SHELL = ['./', './index.html', './styles.css', './app.js', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png', './apple-touch-icon.png', './images/forge-of-the-nutons.jpg', './images/black-arts-and-alchemy.jpg', './images/the-apple-freak.jpg', './images/wheat-train.jpg', './images/jester-haze.jpg', './images/zest-in-peace.jpg', './images/messe-noir.jpg', './images/tnmb.png', './images/tnmb-192.png', './images/tnmb-512.png'];

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await caches.match(request);
    if (cached) {
      return cached;
    }

    if (request.mode === 'navigate') {
      return caches.match('./index.html');
    }

    return Response.error();
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(networkFirst(event.request));
});
 const CACHE_NAME = 'meme-studio-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/icon-192.png',
    '/icon-512.png',
    'https://i.imgflip.com/30b1gx.jpg', // Add your template URLs here for offline
    'https://i.imgflip.com/1ur9b0.jpg',
    'https://i.imgflip.com/24y43o.jpg',
    'https://i.imgflip.com/1jwhkz.jpg',
    'https://i.imgflip.com/1bhk.jpg',
    'https://i.imgflip.com/1bij.jpg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});

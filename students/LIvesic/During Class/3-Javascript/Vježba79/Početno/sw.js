var cacheName = 'myCache';
var filesToCache = ['background.png', 'bar.png', 'header.png'];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all: content');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', (e) => {
    console.log('[Service Worker] Fetched resource '+e.request.url);
    e.respondWith(
        caches.match(e.request).then((r) => {
            console.log('[Service Worker] Fetching resource: '+e.request.url);
            return r || fetch(e.request).then((response) => {
                return caches.open(cacheName).then((cache) => {
                    console.log('[Service Worker] Caching new resource: '+e.request.url);
                    cache.put(e.request, response.clone());
                    return response;
            });
          });
        })
      );
});

var appShellFiles = [
  'index.html',
  'example.webmanifest',
  'style.css',
  'background.png',
  'bar.png',
  'header.png',
  'screenshot.jpg',
  'Thumbs.db'
];

var gamesImages = [];
for(var i=0; i<games.length; i++) {
  gamesImages.push('data/img/'+games[i].slug+'.jpg');
}
var contentToCache = appShellFiles.concat(gamesImages);


  

self.addEventListener('fetch', (e) => {
   
  });

  contentToCache.push('/pwa-examples/js13kpwa/icons/icon-32.png');

// ...

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('js13kPWA-v2').then((cache) => {
      return cache.addAll(contentToCache);
    })
  );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
      caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
          if(key !== cacheName) {
            return caches.delete(key);
          }
        }));
      })
    );
  });
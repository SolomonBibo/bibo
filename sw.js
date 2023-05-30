// Service Worker File (sw.js)

self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('my-cache').then(cache => {
        return cache.addAll([
          '/', // Add the paths to your cached resources
          '/index.html',
          '/mgmt.html',
          '/destination.html',
          '/img/Bibo.png',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  
  self.addEventListener('push', event => {
    let notificationData = {};
    if (event.data) {
      notificationData = event.data.json();
    }
  
    const title = '(Bibo Safaris) New Safari Booking';
    const options = {
      body: notificationData.body,
      icon: 'img/Bibo.png', // Replace with the path to your notification icon
      data: {
        url: notificationData.url // Optionally, include a URL to open on notification click
      }
    };
  
    event.waitUntil(
      self.registration.showNotification(title, options)
    );
  });
  
  self.addEventListener('notificationclick', event => {
    event.notification.close();
  
    const notificationData = event.notification.data;
    if (notificationData && notificationData.url) {
      clients.openWindow(notificationData.url);
    }
  });
  
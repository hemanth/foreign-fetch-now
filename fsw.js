self.addEventListener('install', event => {
  event.registerForeignFetch({
    scopes: ['/roll'],
    origins: ['*']
  });
});

self.addEventListener('foreignfetch', event => {
  event.respondWith(
    fetch(event.request)
      .catch(() => new Response('4')) // Should it not be 42? ;)
      .then(response => {
        return {
          response,
          origin: event.origin
        };
      })
  );
});
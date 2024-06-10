module.exports = {
    globDirectory: 'public/',
    globPatterns: [
      '**/*.{html,js,css,png,jpg,gif,svg,eot,ttf,woff}'
    ],
    swDest: 'public/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: ({ url }) => url.origin === self.location.origin,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'static-resources',
          expiration: {
            maxEntries: 50,
          },
        },
      },
      {
        urlPattern: ({ url }) => url.origin.includes('sanity.io'),
        handler: 'NetworkFirst',
        options: {
          cacheName: 'sanity-api-cache',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 5 * 60, // Cache duration in seconds (5 minutes)
          },
        },
      },
    ],
  };
  
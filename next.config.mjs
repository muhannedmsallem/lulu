import withPWA from 'next-pwa';

// PWA Configuration
const pwaConfig = {

    dest: 'public',
    register: true,
    skipWaiting: true,
    sw: 'service-worker.js', // Path to your service worker file
    swSrc: 'service-worker.js', // Path to your service worker file

};

// Other Next.js configuration options can go here

// Merge Next.js configuration with PWA configuration
const nextConfig = {};



// Merge Next.js configuration with PWA configuration
export default withPWA({
  ...nextConfig,
  ...pwaConfig,
});

// cors.js
const cors = require('@sanity/cors');

// ... other code

// This is the configuration for the Sanity API.
// It accepts an array of options, so you can add as many origins as you like.
// You can find the list of options here: https://www.sanity.io/docs/http-api
const sanityApi = cors.create([
  {
    origin: ['http://localhost:3000', 'http://localhost:3333'], // Add the new origin here
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    headers: ['Content-Type', 'Authorization'],
    credentials: true,
  },
]);

// ... other code

module.exports = {
  client,
  sanityApi,
};
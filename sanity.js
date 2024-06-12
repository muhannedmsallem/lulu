import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '1pi0qth2', // Replace with your actual project ID
  dataset: 'production', // Make sure this matches your dataset
  apiVersion: '2021-03-25', // Use the latest version or your preferred one
  useCdn: true, // `false` if you want to ensure fresh data
  token: 'sksj6WtHf35GNskK0wt7SeiMYU7KMxM2Vls3LrHkmuMIE4q2puxMJRHjGI6E42MXvlP9TkMsCOBo9yv7V0PMwwqZq6NAH9mUs4y3bP4MtyOsru5yXDHZYb6uGxGKvZVMJELqTrFtaoWQ7q6bPHSANLoN7Rdfo6HMYHcg3N7IWL5z5Mqv6nJW',

});

// Helper function to generate image URLs
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client

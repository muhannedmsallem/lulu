import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '1pi0qth2', // Replace with your actual project ID
  dataset: 'production', // Make sure this matches your dataset
  apiVersion: '2021-03-25', // Use the latest version or your preferred one
  useCdn: true, // `false` if you want to ensure fresh data
});

// Helper function to generate image URLs
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client

import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'My Ecommerce Store',
  projectId: '1pi0qth2', // Replace with your actual project ID
  dataset: 'production', // Make sure this matches your dataset
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
})

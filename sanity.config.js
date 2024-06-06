import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './sanity/lustore/schemaTypes'

export default defineConfig({
  projectId: '1pi0qth2',
	dataset: 'production',
  plugins: [structureTool()],
  schema: {
	  types: schemaTypes,
  },
})
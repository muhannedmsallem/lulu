import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import category from './schemas/category'
import subcategory from './schemas/subcategory'
import product from './schemas/product'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([category, subcategory, product])
})

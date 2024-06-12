import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import category from './schemas/category'
import subcategory from './schemas/subcategory'
import product from './schemas/product'
import { user, account, verificationToken } from 'next-auth-sanity/schemas';



export default createSchema({
  name: 'default',
  types: schemaTypes.concat([user, account, verificationToken,category, subcategory, product,user])
})

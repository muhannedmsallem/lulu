import blockContent from './blockContent'
import crewMember from './crewMember'
import castMember from './castMember'
import subcategory from './subcategory'
import product from './product'
import category from './category'
import plotSummary from './plotSummary'
import plotSummaries from './plotSummaries'
import order from './order';
import { user, account, verificationToken } from 'next-auth-sanity/schemas';

export const schemaTypes = [
  // Document types
  product,
  category,
  subcategory,
  order,
  user, account, verificationToken  // Other types

]

export default schemaTypes

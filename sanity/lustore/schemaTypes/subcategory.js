export default {
    name: 'subcategory',
    type: 'document',
    title: 'Subcategory',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'category',
        type: 'reference',
        to: [{ type: 'category' }],
        title: 'Category'
      }
    ]
  }
  
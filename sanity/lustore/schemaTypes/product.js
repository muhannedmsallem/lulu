export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description'
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price'
      },
      {
        name: 'images',
        type: 'array',
        of: [{ type: 'image' }],
        title: 'Images',
        validation: (Rule) => Rule.max(10)

      },
      {
        name: 'sizes',
        type: 'array',
        of: [{ type: 'string' }], // Assuming sizes are strings, adjust as needed
        title: 'Sizes',
        validation: (Rule) => Rule.max(5)
      },
      {
        name: 'category',
        type: 'reference',
        to: [{ type: 'category' }],
        title: 'Category'
      },
      {
        name: 'subcategory',
        type: 'reference',
        to: [{ type: 'subcategory' }],
        title: 'Subcategory'
      }
    ]
  }
  
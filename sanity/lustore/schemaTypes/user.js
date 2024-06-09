export default {
  name: 'user',
  type: 'document',
  title: 'User',
  fields: [
    {
      name: 'username',
      type: 'string',
      title: 'username',
      // You can add validation rules here if needed
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    },
    {
      name: 'isAdmin',
      type: 'boolean',
      title: 'Is Admin'
    },
    {
      name: 'password',
      type: 'string',
      title: 'Password',
      // You can add validation rules here if needed
    },

  ]
}
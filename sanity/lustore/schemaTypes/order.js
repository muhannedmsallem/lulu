// schemas/order.js
export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'address',
        title: 'Address',
        type: 'string',
      },
      {
        name: 'phoneNumber',
        title: 'Phone Number',
        type: 'string',
      },
      // Add other fields as needed
      {
        name: 'location',
        title: 'Location (Google Maps link)',
        type: 'url', // or 'string' if you prefer
        description: 'Paste a link to the location on Google Maps',
      },
    ],
  };
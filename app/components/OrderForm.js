"use client";

import React, { useState } from 'react';

const OrderForm = ({ onSuccess }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      name,
      address,
      phoneNumber,
      items: JSON.parse(localStorage.getItem('cart')) || [],
    };

    try {
      // Replace with your Sanity client or API call to create the order
      const response = await fetch('/api/createOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        localStorage.removeItem('cart');
        onSuccess();
      } else {
        console.error('Order creation failed');
      }
    } catch (error) {
      console.error('Order creation error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 shadow-md rounded-lg bg-white">
      <h2 className="text-2xl mb-4">Place Your Order</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone Number</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Submit</button>
    </form>
  );
};

export default OrderForm;

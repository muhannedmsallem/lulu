// app/components/AddToBag.js
"use client";

import { useState } from 'react';

const AddToBag = ({ product, size }) => {
  const [quantity, setQuantity] = useState(1);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item._id === product._id && item.size === size);

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push({ ...product, quantity, size });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000); // Hide the message after 2 seconds
  };

  return (
    <div className="flex flex-col gap-4">
      {showSuccessMessage && (
        <div className="text-green-500">تمت الإضافة إلى عربة التسوق</div>
      )}
      <div className="flex items-center gap-2">
        <label htmlFor="quantity" className="text-gray-700">Quantity:</label>
        <div className="relative ml-10">
          <button
            className="absolute top-0 right-full h-full px-2 border-l rounded-l text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300"
            onClick={() => setQuantity((prev) => Math.min(prev + 1, 10))}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </button>
          <input
            className="w-10 px-2 py-1 border rounded text-black focus:outline-none focus:ring focus:border-blue-300"
            id="quantity"
            type="number"
            min="1"
            max="10"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <button
            className="absolute top-0 left-full h-full px-2 border-l rounded-r text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300"
            onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
            </svg>
          </button>
        </div>
      </div>
      <button
        disabled={!size}
        onClick={handleAddToCart}
        className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 ${!size && 'opacity-50 cursor-not-allowed'}`}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToBag;

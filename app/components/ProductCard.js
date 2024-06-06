"use client";

import React from 'react';
import { urlFor } from '../../sanity'; // Ensure this path is correct
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white w-full max-w-sm mx-auto pt-4 shadow-md rounded-lg overflow-hidden flex flex-col justify-center items-center">
      <div className="aspect-w-1 aspect-h-1 w-full">
        <img
          className="object-center w-full h-auto"
          src={urlFor(product.images[0]).width(300).height(400).url()}
          alt={product.title}
        />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-gray-800 text-lg font-semibold">{product.title}</h2>
        <p className="text-gray-600 mt-1">${product.price}</p>
        <Link href={`/product/${product._id}`} passHref>
          <button className="btn btn-primary mt-2">More</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

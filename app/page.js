"use client";

import { useState, useEffect } from 'react';
import { client } from '../sanity';
import ProductCard from './components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(
        `*[_type == "product"]{
          _id,
          title,
          price,
          images,
          "category": category->title,
          "subcategory": subcategory->title
        }[0...3]`
      );
      setProducts(data);
      setIsLoading(false); // Update loading state after fetching data
    };
    fetchProducts();
  }, []);

  return (
    <div className="overflow-y-scroll h-full">
      {isLoading ? ( // Render loading indicator if isLoading is true
        <div className="flex justify-center items-center h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">Welcome to our Clothes Store</h1>
            <p className="text-lg text-gray-600 mb-8">
              Browse our collection of stylish and affordable clothing
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

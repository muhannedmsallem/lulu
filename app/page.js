"use client";

import { useState, useEffect } from 'react';
import { client } from '../sanity';
import ProductCard from './components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [productData, categoryData] = await Promise.all([
          fetchWithCache('/api/products'),
          fetchWithCache('/api/categories')
        ]);
        setProducts(productData);
        setCategories(categoryData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const fetchWithCache = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch failed, trying to get data from cache:', error);
      const cache = await caches.open('api-cache-v1');
      const cachedResponse = await cache.match(url);
      if (cachedResponse) {
        return await cachedResponse.json();
      } else {
        throw new Error('No data found in cache');
      }
    }
  };

  return (
    <div className="overflow-y-scroll h-full">
      {isLoading ? (
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
            <div className="flex flex-wrap justify-center mb-4">
              {categories.map((category) => (
                <div key={category._id} className="p-2 m-2 border rounded">
                  {category.title}
                </div>
              ))}
            </div>
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

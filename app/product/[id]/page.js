'use client'; // This tells Next.js that this is a client component

import { useState, useEffect } from 'react';
import { client } from "../../../sanity";
import AddToBag from "../../components/AddToBag";
import ImageGallery from "../../components/ImageGallery";
import { Star, Truck, ArrowLeft } from "lucide-react";

async function fetchProduct(id) {
  const query = `*[_type == "product" && _id == $id][0] {
        _id,
        images,
        price,
        title,
        description,
        "categoryName": category->name,
        price_id,
        sizes
      }`;
  const data = await client.fetch(query, { id });
  return data;
}

function cacheProductData(id, data) {
  localStorage.setItem(`product-${id}`, JSON.stringify(data));
}

function getCachedProductData(id) {
  const cachedData = localStorage.getItem(`product-${id}`);
  return cachedData ? JSON.parse(cachedData) : null;
}

export default function ProductPage({ params }) {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = getCachedProductData(params.id);

      if (cachedData) {
        setProduct(cachedData);
      } else {
        const data = await fetchProduct(params.id);
        setProduct(data);
        cacheProductData(params.id, data);
      }
    };

    fetchData();
  }, [params.id]);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  if (!product) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white max-w-screen-xl p-4 md:p-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={product.images} />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3 text-center">
              <span className="mb-0.5 inline-block text-gray-500">
                {product.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {product.title}
              </h2>
            </div>

            <div className="mb-4 text-center flex items-center justify-center">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  دينار {product.price}
                </span>
              </div>
            </div>

            <div className="mb-6 text-center">
              <span className="block text-gray-700 mb-2">اختر المقاس:</span>
              <div className="flex gap-2 justify-center">
                {product.sizes?.map((size, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 border rounded-lg ${selectedSize === size ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-indigo-400 hover:text-white transition-colors duration-200`}
                    onClick={() => handleSizeChange(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {selectedSize && <p className="mt-2 text-gray-500">المقاس المختار: {selectedSize}</p>}
            </div>

            <div className="flex gap-2.5 justify-center">
              <AddToBag product={product} size={selectedSize} />
            </div>
            <p className="mt-12 text-base text-gray-500 tracking-wide text-center">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

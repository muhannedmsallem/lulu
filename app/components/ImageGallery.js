// app/components/ImageGallery.js

"use client";
import React, { useState } from 'react';
import { urlFor } from '../../sanity'; // Ensure the import path is correct

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center">
<img
  className="mt-20 w-full h-full sm:h-72 md:h-80 lg:h-96 xl:h-auto border border-gray-300 object-contain"
  src={urlFor(selectedImage).width(400).height(500).url()}
  alt="Product image"
/>
      <div className="mt-4 flex space-x-2">
        {images.map((image, index) => (
          <img
            key={index}
            className={`h-16 w-16 rounded-lg cursor-pointer ${
              selectedImage._key === image._key ? 'border-2 border-blue-500' : ''
            }`}
            src={urlFor(image).width(100).height(100).url()}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

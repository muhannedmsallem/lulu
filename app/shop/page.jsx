"use client";
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { client } from '../../sanity';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const loadMoreRef = useRef();
  const LIMIT = 20;

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [productData, categoryData] = await Promise.all([
          client.fetch(
            `*[_type == "product"] | order(_createdAt desc) [0...${LIMIT}] {
              _id,
              title,
              price,
              images,
              "category": category->title,
              "subcategory": subcategory->title
            }`
          ),
          client.fetch(
            `*[_type == "category"]{
              _id,
              title,
              "subcategories": *[_type == "subcategory" && references(^._id)]
            }`
          ),
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

  const fetchMoreProducts = async () => {
    setIsFetchingMore(true);
    try {
      const moreProducts = await client.fetch(
        `*[_type == "product"] | order(_createdAt desc) [${page * LIMIT}...${(page + 1) * LIMIT}] {
          _id,
          title,
          price,
          images,
          "category": category->title,
          "subcategory": subcategory->title
        }`
      );
      setProducts((prevProducts) => [...prevProducts, ...moreProducts]);
      setPage((prevPage) => prevPage + 1);
      setHasMore(moreProducts.length === LIMIT);
      setIsFetchingMore(false);
    } catch (error) {
      console.error('Error fetching more products:', error);
      setIsFetchingMore(false);
    }
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveSubcategory(null);
  };

  const handleSubcategoryClick = (subcategory) => {
    setActiveSubcategory(subcategory);
  };

  const filteredProducts = activeSubcategory
    ? products.filter(
        (product) =>
          product.category === activeCategory &&
          product.subcategory === activeSubcategory
      )
    : activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;

  const observer = useRef();
  const lastProductElementRef = useCallback((node) => {
    if (isLoading || isFetchingMore || !hasMore) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchMoreProducts();
      }
    });
    if (node) observer.current.observe(node);
  }, [isLoading, isFetchingMore, hasMore]);

  const buttonStyle = {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    margin: '0.5rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
  };
  
  if (!products) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col items-center mb-4">
            <div className="flex flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category._id}
                  onClick={() => handleCategoryClick(category.title)}
                  style={{
                    ...buttonStyle,
                    backgroundColor: activeCategory === category.title ? '#f0f0f0' : 'white',
                    borderColor: activeCategory === category.title ? '#007bff' : '#ccc',
                  }}
                >
                  {category.title}
                </button>
              ))}
            </div>
            {activeCategory && (
              <div className="flex flex-wrap justify-center mt-4">
                {categories
                  .find((cat) => cat.title === activeCategory)?.subcategories
                  ?.map((subcategory) => (
                    <button
                      key={subcategory._id}
                      onClick={() => handleSubcategoryClick(subcategory.title)}
                      style={{
                        ...buttonStyle,
                        backgroundColor: activeSubcategory === subcategory.title ? '#f0f0f0' : 'white',
                        borderColor: activeSubcategory === subcategory.title ? '#007bff' : '#ccc',
                      }}
                    >
                      {subcategory.title}
                    </button>
                  ))}
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto">
            {filteredProducts && filteredProducts.length > 0 ? (
              <>
                {filteredProducts.map((product, index) => {
                  if (filteredProducts.length === index + 1) {
                    return (
                      <div key={product._id} ref={lastProductElementRef}>
                        <ProductCard product={product} />
                      </div>
                    );
                  } else {
                    return (
                      <div key={product._id}>
                        <ProductCard product={product} />
                      </div>
                    );
                  }
                })}
              </>
            ) : (
              <h1 className="text-black text-center">No products found</h1>
            )}
          </div>
          {isFetchingMore && (
            <div className="flex justify-center items-center mt-4">
              <div className="loader"></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;

// App.js
import React, { useState, useEffect, useCallback } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);  // State to store the product list
  const [page, setPage] = useState(1);  // Track page number for pagination
  const [loading, setLoading] = useState(false);  // Loading state

  // Function to fetch data
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const res = await fetch(`https://fakestoreapi.com/products?limit=10&page=${page}`);
    const data = await res.json();
    setProducts((prevProducts) => [...prevProducts, ...data]);  // Append new products to the list
    setLoading(false);
  }, [page]);

  // Load more data when the page number changes
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Infinite scrolling logic: Check if user scrolled near the bottom
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 && !loading) {
        setPage((prevPage) => prevPage + 1);  // Load next page
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />  // Pass product as prop to ProductCard
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Home;

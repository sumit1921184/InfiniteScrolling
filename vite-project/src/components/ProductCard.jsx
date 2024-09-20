// ProductCard.js
import React from "react";
import "../App.css"

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3 className="ellipse">{product.title}</h3>
      <p className="ellipse">{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductCard;

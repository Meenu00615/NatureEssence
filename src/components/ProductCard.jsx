import React from 'react';
import './ProductCard.css';

const ProductCard = ({ src, title, description }) => {
  return (
    <div className="product-card">
      <img src={src} alt={title} />
      <div className="product-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;

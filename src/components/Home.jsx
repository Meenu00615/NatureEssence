import React from 'react';
import ProductCard from './ProductCard';
import Gallery from './Gallery'; 
import './Home.css'; 

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <h1>Overview</h1>
        <div className="image-grid">

        </div>
        <Gallery />
      </div>
    </div>
  );
};

export default Home;

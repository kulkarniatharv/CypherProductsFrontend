import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroProduct from './components/hero_product/HeroProduct';

const heroImage = require('./images/Hero_image.png');

function App() {
  return (
    <div className="container">
      <div className="navbar">
        <Navbar />
      </div>
      <div
        className="hero-image"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundRepeat: `no-repeat`,
          height: '100%',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <HeroProduct />
      </div>
      <div className="products">
        <div className="product-item-1">Shoe</div>
        <div className="product-item-2">Shoe</div>
        <div className="product-item-3">Shoe</div>
        <div className="product-item-4">Shoe</div>
        <div className="product-pages">Page Number</div>
        <div className="product-trends">New Popular</div>
      </div>
      <div className="cart-info">Cart Info</div>
    </div>
  );
}

export default App;

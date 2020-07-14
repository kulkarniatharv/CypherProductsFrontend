import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroProduct from './components/hero_product/HeroProduct';
import Product from './components/Products/Products';
import Cart from './components/Cart/Cart';

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
        <Product />
      </div>
      <div className="cart-info">
        <Cart />
      </div>
    </div>
  );
}

export default App;

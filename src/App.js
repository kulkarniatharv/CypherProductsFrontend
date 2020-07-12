import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="hero-image">Hero-image</div>
      <div className="products">
        <div className="product-item">Shoe</div>
        <div className="product-item">Shoe</div>
        <div className="product-item">Shoe</div>
        <div className="product-item">Shoe</div>
        <div className="product-pages">Page Number</div>
        <div className="product-trends">New Popular</div>
      </div>
      <div className="cart-info">Cart Info</div>
    </div>
  );
}

export default App;

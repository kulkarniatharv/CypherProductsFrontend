import React from 'react';
import './Cart.css';

import percentage from '../../images/dividends.svg';
import addToCart from '../../images/add-to-cart.svg';

const Cart = props => (
  <>
    <img
      className="discount"
      src={percentage}
      alt="discount"
      height="40px"
      width="40px"
    />

    <img
      className="cart"
      src={addToCart}
      alt="cart"
      height="40px"
      width="40px"
    />

    <span className="credits">
      <a
        href="https://twitter.com/realj4ke"
        style={{ textDecoration: 'none', color: '#1a1a1a' }}
      >
        Atharv Kulkarni
      </a>
    </span>
  </>
);

export default Cart;

import React from 'react';
import PriceTag from '../UI_Components/PriceTag';
import './HeroProducts.css';

const HeroProduct = () => (
  <>
    <PriceTag
      classes="animate-me"
      passedStyles={{
        position: 'relative',
        top: '15%',
        left: '75%',
        cursor: 'default',
      }}
      price="99.8$"
      size="6"
    />
    <div
      style={{
        position: 'relative',
        top: '65%',
        left: '10%',
        cursor: 'default',
      }}
    >
      <span style={{ fontFamily: 'FiraSans-Medium', fontSize: '1.5rem' }}>
        Nike Tanjun
      </span>
      <br />
      <span style={{ fontFamily: 'FiraSans-Light', fontSize: '1.rem' }}>
        Quality Athletics
      </span>
    </div>
  </>
);

export default HeroProduct;

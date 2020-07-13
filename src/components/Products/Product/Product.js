import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PriceTag from '../../UI_Components/PriceTag';

const styles = {
  NameDescHide: {
    display: 'none',
  },
};

const animationClass = 'animate__animated animate__fadeInDown';

const Product = props => {
  const { productDetail, image } = props;

  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <div
        className={`product-name ${isHovering ? animationClass : ''}`}
        style={isHovering ? {} : { ...styles.NameDescHide }}
      >
        {productDetail.name}
      </div>
      <div
        className={`product-description ${isHovering ? animationClass : ''}`}
        style={isHovering ? {} : { ...styles.NameDescHide }}
      >
        {productDetail.description}
      </div>
      <div className="product-price">
        <PriceTag
          classes="animate-me"
          passedStyles={{
            position: 'relative',
            top: '15%',
            left: '75%',
            cursor: 'default',
          }}
          price={`${productDetail.price}`}
          size="3"
        />
      </div>
      <img
        src={image}
        alt="Shoe"
        style={{ height: '10rem', width: '10rem' }}
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
      />
    </>
  );
};

Product.propTypes = {
  productDetail: PropTypes.object,
  image: PropTypes.string,
};

export default Product;

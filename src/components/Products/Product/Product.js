import React, { useState } from 'react';
import './Product.css';
import PropTypes from 'prop-types';
import PriceTag from '../../UI_Components/PriceTag';

const styles = {
  NameDescHide: {
    opacity: '0',
  },
  NameDescShow: {
    opacity: '1',
  },
  shoeDisplayImg: {
    backgroundRepeat: `no-repeat`,
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
};

const animationClassFID = 'animate__animated animate__fadeInDown';
const animationClassFIU = 'animate__animated animate__fadeInUp';

const Product = props => {
  const { productDetail, image, isHovering } = props;

  return (
    <>
      <div
        style={
          isHovering
            ? {
                ...styles.shoeDisplayImg,
                backgroundImage: `url(${image})`,
                animation: 'pulse',
                animationDuration: '500ms',
              }
            : { ...styles.shoeDisplayImg, backgroundImage: `url(${image})` }
        }
      />
      <div
        className={`product-name ${isHovering ? animationClassFID : ''}`}
        style={
          isHovering ? { ...styles.NameDescShow } : { ...styles.NameDescHide }
        }
      >
        <span style={{ fontFamily: 'FiraSans-Medium', fontSize: '1rem' }}>
          {productDetail.name}
        </span>
      </div>
      {/* <div
        className={`product-description ${isHovering ? animationClass : ''}`}
        style={
          isHovering ? { ...styles.NameDescShow } : { ...styles.NameDescHide }
        }
      >
        {productDetail.description}
      </div> */}
      <div
        className={`product-price ${isHovering ? animationClassFIU : ''}`}
        style={
          isHovering ? { ...styles.NameDescShow } : { ...styles.NameDescHide }
        }
      >
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

      {/* <img
        style={{ position: 'relative' }}
        src={image}
        alt={productDetail.name}
        height="100%"
        width="100%"
      /> */}
    </>
  );
};

Product.propTypes = {
  productDetail: PropTypes.object,
  image: PropTypes.string,
  isHovering: PropTypes.bool,
};

export default Product;

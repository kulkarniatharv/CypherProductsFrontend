import React from 'react';
import PropTypes from 'prop-types';

const PriceTag = props => {
  const { price, size, passedStyles, classes } = props;

  return (
    <div
      className={`${classes}`}
      style={{
        ...passedStyles,
        height: `${size}rem`,
        width: `${size}rem`,
        lineHeight: `${size}rem`,
        backgroundColor: '#8fb4cb',
        borderRadius: '50%',
        textAlign: 'center',
        color: '#fefefe',
        fontFamily: 'FiraSans-Bold',
        fontSize: `${size / 3}rem`,
      }}
    >
      {price}
    </div>
  );
};

PriceTag.propTypes = {
  price: PropTypes.string,
  size: PropTypes.string.isRequired,
  classes: PropTypes.string,
  passedStyles: PropTypes.object,
};

export default PriceTag;

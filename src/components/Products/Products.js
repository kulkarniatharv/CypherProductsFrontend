import React, { useState, useEffect } from 'react';
import Product from './Product/Product';

// importing images
import P1 from '../../images/p1.png';
import P2 from '../../images/p2.png';
import P3 from '../../images/p3.png';
import P4 from '../../images/p4.png';

const Products = () => {
  const [productsAPI, setProductsAPI] = useState([]);
  const [currPage, setCurrPage] = useState(0);

  const reqProducts = () => {
    fetch('https://cypher-products-api.herokuapp.com/api', {
      method: 'POST',
      body: JSON.stringify({
        query: `query {
            products{
                _id
                name
                description
                price
            }
        }`,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => {
        setProductsAPI(json.data.products);
        console.log('Products from API', json.data.products);
      })
      .catch(err => console.log(err));
  };

  const OutOfProducts = <div>We're out but we hope you liked something!</div>;

  useEffect(reqProducts, []);

  return (
    <>
      {productsAPI.length !== 0 ? (
        <>
          <div className="product-item-1">
            {productsAPI[currPage] ? (
              <Product image={P1} productDetail={productsAPI[currPage]} />
            ) : (
              { OutOfProducts }
            )}
          </div>
          <div className="product-item-2">
            {productsAPI[currPage + 1] ? (
              <Product image={P2} productDetail={productsAPI[currPage + 1]} />
            ) : (
              { OutOfProducts }
            )}
          </div>
          <div className="product-item-3">
            {productsAPI[currPage + 2] ? (
              <Product image={P3} productDetail={productsAPI[currPage + 2]} />
            ) : (
              { OutOfProducts }
            )}
          </div>
          <div className="product-item-4">
            {productsAPI[currPage + 3] ? (
              <Product image={P4} productDetail={productsAPI[currPage + 3]} />
            ) : (
              { OutOfProducts }
            )}
          </div>
          <div
            className="product-pages"
            onClick={() => {
              setCurrPage(currPage + 4);
            }}
            onKeyPress={() => {
              setCurrPage(currPage + 4);
            }}
            role="button"
            tabIndex="0"
          >
            Total pages: {Math.floor(productsAPI.length / 4) + 1}
          </div>
          <div className="product-trends">New Popular</div>
        </>
      ) : (
        <div>Loading the data...</div>
      )}
    </>
  );
};

export default Products;

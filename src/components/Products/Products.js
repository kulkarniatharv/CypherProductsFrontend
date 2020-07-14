import React, { useState, useEffect } from 'react';
import Product from './Product/Product';
import PageNumber from './PageNumber/PageNumber';
import Trends from './Trends/Trends';
import NoItem from './NoItem';

// importing images
import P1 from '../../images/p1.png';
import P2 from '../../images/p2.png';
import P3 from '../../images/p3.png';
import P4 from '../../images/p4.png';

const Products = () => {
  const [productsAPI, setProductsAPI] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [isHoveringP1, setIsHoveringP1] = useState(false);
  const [isHoveringP2, setIsHoveringP2] = useState(false);
  const [isHoveringP3, setIsHoveringP3] = useState(false);
  const [isHoveringP4, setIsHoveringP4] = useState(false);

  // API Requests
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
        const jsonData = json.data.products;

        if (jsonData.length / 4 <= 1) {
          setTotalPages(1);
        } else {
          setTotalPages(Math.floor(jsonData.length / 4) + 1);
        }
        setProductsAPI(jsonData);

        console.log('Products from API', jsonData);
      })
      .catch(err => console.log(err));
  };

  useEffect(reqProducts, []);

  // EVENT HANDLERS
  const changePageNumber = operation => {
    if (operation === 'inc') {
      setCurrPage(currPage + 4);
    } else if (operation === 'dec') {
      setCurrPage(currPage - 4);
    }
  };

  return (
    <>
      {productsAPI.length !== 0 ? (
        <>
          <div
            className="product-item-1"
            onMouseEnter={() => {
              setIsHoveringP1(true);
            }}
            onMouseLeave={() => {
              setIsHoveringP1(false);
            }}
          >
            {productsAPI[currPage] ? (
              <Product
                image={P1}
                productDetail={productsAPI[currPage]}
                isHovering={isHoveringP1}
              />
            ) : (
              <NoItem />
            )}
          </div>
          <div
            className="product-item-2"
            onMouseEnter={() => {
              setIsHoveringP2(true);
            }}
            onMouseLeave={() => {
              setIsHoveringP2(false);
            }}
          >
            {productsAPI[currPage + 1] ? (
              <Product
                image={P2}
                productDetail={productsAPI[currPage + 1]}
                isHovering={isHoveringP2}
              />
            ) : (
              <NoItem />
            )}
          </div>
          <div
            className="product-item-3"
            onMouseEnter={() => {
              setIsHoveringP3(true);
            }}
            onMouseLeave={() => {
              setIsHoveringP3(false);
            }}
          >
            {productsAPI[currPage + 2] ? (
              <Product
                image={P3}
                productDetail={productsAPI[currPage + 2]}
                isHovering={isHoveringP3}
              />
            ) : (
              <NoItem />
            )}
          </div>
          <div
            className="product-item-4"
            onMouseEnter={() => {
              setIsHoveringP4(true);
            }}
            onMouseLeave={() => {
              setIsHoveringP4(false);
            }}
          >
            {productsAPI[currPage + 3] ? (
              <Product
                image={P4}
                productDetail={productsAPI[currPage + 3]}
                isHovering={isHoveringP4}
              />
            ) : (
              <NoItem />
            )}
          </div>

          <div className="product-pages">
            <PageNumber
              onClickHandler={changePageNumber}
              currPage={currPage + 1}
              totalPages={totalPages}
            />
          </div>
          <div className="product-trends">
            <Trends />
          </div>
        </>
      ) : (
        <div style={{ fontFamily: 'FiraSans-Bold', fontSize: '1.5rem' }}>
          Swapping time and space...
        </div>
      )}
    </>
  );
};

export default Products;

import React from 'react';

const NoItem = () => (
  <div
    style={{
      display: 'grid',
      alignItems: 'center',
      textAlign: 'center',
      height: '100%',
      fontFamily: 'FiraSans-Medium',
    }}
  >
    Uh oh! Looks like we're out of products.. Add items from the{' '}
    <a href="https://cypher-products-api.herokuapp.com/api">API</a>
    Documentation of API can be found
    <a href="https://github.com/kulkarniatharv/CypherProductsBackend">here</a>
  </div>
);

export default NoItem;

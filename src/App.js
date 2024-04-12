import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';

const productsData = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 10 },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 20 },
  // Add more products here
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="App">
      <h1>E-commerce Website</h1>
      <div className="products">
        {productsData.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
import React, { useState } from 'react';
import Product from './Product';
import CartSummary from './CartSummary'; // Import CartSummary component

const productsData = [
  { id: 1, name: 'Fantech TRAX X2 Gaming Mouse', description: 'Ultra-precise scroll wheel for better browsing web', price: 390 },
  { id: 2, name: 'Logitech RGB G910 Orion Spark Mechanical Gaming Keyboard', description: 'Worlds fastest RGB mechanical gaming keyboard', price: 9500 },
  { id: 3, name: 'Corsair Void RGB Elite USB Premium Gaming Headset [WHITE]', description: 'Custom-tuned 50-millimeter high-density neodymium Audio drivers with an expanded frequency range of 20hz-30, 000Hz.', price: 4150 },
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCartSummary, setShowCartSummary] = useState(false); // Define state variable

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productToRemove) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productToRemove.id);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="App">
      <h1>Products:</h1>
      <div className="products">
        {productsData.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      {/* Button to view cart */}
      <br></br>
      <button onClick={() => setShowCartSummary(!showCartSummary)}>My Cart</button>
      {/* Render CartSummary conditionally */}
      {showCartSummary && <CartSummary cartItems={cartItems} removeFromCart={removeFromCart} />}
    </div>
  );
};

export default App;

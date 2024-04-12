import React, { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";
import "./App.css";

const productsData = [
  {
    id: 1,
    name: "Product 1",
    description: "Description of Product 1",
    price: 10,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of Product 2",
    price: 20,
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of Product 3",
    price: 30,
  },
  {
    id: 4,
    name: "Product 4",
    description: "Description of Product 4",
    price: 40,
  },
  {
    id: 5,
    name: "Product 5",
    description: "Description of Product 5",
    price: 50,
  },
  {
    id: 6,
    name: "Product 6",
    description: "Description of Product 6",
    price: 60,
  },
  {
    id: 7,
    name: "Product 7",
    description: "Description of Product 7",
    price: 70,
  },
  {
    id: 8,
    name: "Product 8",
    description: "Description of Product 8",
    price: 80,
  },
  {
    id: 9,
    name: "Product 9",
    description: "Description of Product 9",
    price: 90,
  },
  {
    id: 10,
    name: "Product 10",
    description: "Description of Product 10",
    price: 100,
  },
];

const App = () => {
  // Initialize cart state with an empty array
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="App">
      <h1 className="header">E-commerce Website</h1>
      <div className="products">
        {/* Map through the productsData array and render a Product component for each product */}
        {productsData.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      {/* Render the Cart component and pass the cartItems state as a prop */}
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;

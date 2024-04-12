import React from "react";

// A functional component that displays the details of a single product
const Product = ({ product, addToCart }) => {
  const { name, description, price } = product;

  return (
    <div className="product">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;

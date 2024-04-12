import React from "react";

// A functional component that displays the contents of the shopping cart
const Cart = ({ cartItems }) => {
  // Calculate the total price of the items in the shopping cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart Summary</h2>
      <ul>
        {/*Render a list item for each item in the shopping cart*/}
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} : ${item.price}
          </li>
        ))}
      </ul>
      {/*Display the total price of the items in the shopping cart*/}
      <p className="total-price">Total Price: ${totalPrice}</p>
    </div>
  );
};

export default Cart;

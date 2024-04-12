import React from "react";

// A functional component that displays the contents of the shopping cart
const Cart = ({ cartItems }) => {
  // Calculate the total price of the items in the shopping cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <div className="heading">
        <h2>Cart Summary</h2>
      </div>
      <div className="cart-content">
        <ul>
          {/*Render a list item for each item in the shopping cart*/}
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} : ${item.price}
            </li>
          ))}
        </ul>
      </div>
      {/*Display the total price of the items in the shopping cart*/}
      <div className="total-price">
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default Cart;

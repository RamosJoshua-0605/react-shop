    import React from 'react';

    const CartSummary = ({ cartItems, removeFromCart }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="cart">
        <h2>Cart Summary</h2>
        <ul className="list-group">
            {cartItems.map((item) => (
            <li key={item.id} className="list-group-item">
                {item.name} - ₱{item.price} {/* Display price in Philippine Peso */}
                <button className="btn btn-danger float-end" onClick={() => removeFromCart(item)}>
                Remove
                </button>
            </li>
            ))}
        </ul>
        <p>Total Price: ₱{totalPrice}</p> {/* Display total price in Philippine Peso */}
        </div>
    );
    };

    export default CartSummary;

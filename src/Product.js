
    import React from 'react';

    const Product = ({ product, addToCart }) => {
    const { name, description, price } = product;

    return (
        <div className="product">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>₱{price}</p> {/* Display price in Philippine Peso */}
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
    };

    export default Product;

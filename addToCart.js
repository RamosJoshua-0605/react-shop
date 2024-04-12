const Cart = ({ cartItems }) => {
    return (
      <div>
        <h2>Cart Summary</h2>
        {cartItems.map(item => (
          <div key={item.id}>
            <p>{item.name} - ${item.price}</p>
          </div>
        ))}
        <p>Total: ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
      </div>
    );
  };
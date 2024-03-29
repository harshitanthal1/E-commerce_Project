import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total Price: ${item.quantity * item.price}</p>
            <button>+</button>
            <button>-</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

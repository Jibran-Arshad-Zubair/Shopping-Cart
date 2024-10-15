import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, incrementQuantity, decrementQuantity, removeItem, totalBill }) => {
  return (
    <div className="cart">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            removeItem={removeItem}
          />
        ))
      )}

      <h3 className="text-xl mt-4 font-bold">Total Bill: PKR {totalBill}</h3>
      <p className="text-gray-600">Total Items: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
    </div>
  );
};

export default Cart;

import React from 'react';

const CartItem = ({ item, incrementQuantity, decrementQuantity, removeItem }) => {
  return (
    <div className="flex justify-between items-center bg-white p-2 mb-2 shadow rounded-lg">
      <div>
        <h4 className="text-lg font-semibold">{item.title}</h4>
        <p>Price: PKR {item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      
      <div className="flex items-center">
        <button onClick={() => incrementQuantity(item.id)} className="bg-green-500 text-white px-2 py-1 rounded">
          +
        </button>
        <button onClick={() => decrementQuantity(item.id)} className="bg-red-500 text-white px-2 py-1 rounded mx-2">
          -
        </button>
        <button onClick={() => removeItem(item.id)} className="bg-gray-500 text-white px-2 py-1 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;

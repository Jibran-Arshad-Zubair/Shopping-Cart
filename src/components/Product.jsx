import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 text-center">
      <img src={product.image} alt={product.title} className="w-full h-32 object-cover mb-2" />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-600 mb-2">Price: PKR {product.price}</p>
      <button 
        onClick={() => addToCart(product)} 
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;

// Wishlist.jsx
import React, { useState } from 'react';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const handleAddToWishlist = (productId) => {
    addToWishlist(productId).then(() => {
    setWishlist([...wishlist, productId]);
    });

  return (
    <div>
      <h1>Wishlist</h1>
      <div>
        {wishlist.map((productId) => (
          <div key={productId}>
            <p>Product ID: {productId}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
};

export default Wishlist;

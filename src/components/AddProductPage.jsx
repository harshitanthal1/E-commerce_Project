import React, { useState } from 'react';
import { addProduct } from '../services/productService';

const AddProductPage = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product).then(() => {

    });
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductPage;

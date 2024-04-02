// Home.jsx
import React, { useEffect, useState } from 'react';
import { fetchProductsByCategory } from '../services/productService';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsByCategory('all').then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import { searchProducts } from '../services/productService';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    searchProducts(searchQuery).then((data) => {
      setSearchResults(data);
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {searchResults.map((result) => (
          <div key={result.id}>
            <p>{result.name}</p>
            <p>{result.price}</p>
            <p>{result.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;

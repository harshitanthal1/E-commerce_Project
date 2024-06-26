import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './store/actions/productActions';
import { fetchUserOrders } from './store/thunks/orderThunks';
import Home from "./components/Home.jsx";
import Search from './components/Search';
import Wishlist from './components/Wishlist';
import AddProductPage from './components/AddProductPage';
import DisplayProductPage from './components/DisplayProductPage';
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import Cart from "./components/Cart.jsx";
import Orders from "./components/Orders.jsx";
import reactLogo from './assets/react.svg';
import './App.css';


function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchUserOrders());
  }, [dispatch]);

  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/seller/add-product" element={<AddProductPage />} />
        <Route path="/seller/display-product" element={<DisplayProductPage />} />
        <Route path="/seller/orders" element={<OrdersPage />} />
      </Routes>
    </Router>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;


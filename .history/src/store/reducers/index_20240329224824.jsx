import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import productReducer from './productReducer';
import userReducer from './userReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  user: userReducer,
  orders: orderReducer,
});

export default rootReducer;
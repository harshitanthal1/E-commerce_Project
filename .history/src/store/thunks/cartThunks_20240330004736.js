import { addToCart as addToCartService, removeFromCart as removeFromCartService, increaseQuantity as increaseQuantityService, decreaseQuantity as decreaseQuantityService } from '../../services/cartService';

export const addToCart = (itemId) => async (dispatch) => {
  try {
    const item = await addToCartService(itemId);
    dispatch({ type: 'ADD_TO_CART', payload: item });
  } catch (error) {
    
  }
};

export const removeFromCart = (itemId) => async (dispatch) => {
  try {
    await removeFromCartService(itemId);
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  } catch (error) {
    
  }
};

export const increaseQuantity = (itemId) => async (dispatch) => {
  try {
    await increaseQuantityService(itemId);
    dispatch({ type: 'INCREASE_QUANTITY', payload: itemId });
  } catch (error) {
    
  }
};

export const decreaseQuantity = (itemId) => async (dispatch) => {
  try {
    await decreaseQuantityService(itemId);
    dispatch({ type: 'DECREASE_QUANTITY', payload: itemId });
  } catch (error) {
    
  }
};

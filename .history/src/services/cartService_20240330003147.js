import axios from 'axios';

const addToCart = async (itemId) => {
  try {
    const response = await axios.post(`/api/cart`, { itemId });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const removeFromCart = async (itemId) => {
  try {
    const response = await axios.delete(`/api/cart/${itemId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const increaseQuantity = async (itemId) => {
  try {
    const response = await axios.put(`/api/cart/${itemId}/increase`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const decreaseQuantity = async (itemId) => {
  try {
    const response = await axios.put(`/api/cart/${itemId}/decrease`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { addToCart, removeFromCart, increaseQuantity, decreaseQuantity };

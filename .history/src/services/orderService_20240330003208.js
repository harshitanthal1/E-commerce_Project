import axios from 'axios';

const placeOrder = async (orderData) => {
  try {
    const response = await axios.post('/api/order', orderData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const getUserOrders = async () => {
  try {
    const response = await axios.get('/api/orders');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { placeOrder, getUserOrders };

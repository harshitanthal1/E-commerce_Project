import axios from 'axios';

const getProducts = async () => {
  try {
    const response = await axios.get('/api/products');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { getProducts };

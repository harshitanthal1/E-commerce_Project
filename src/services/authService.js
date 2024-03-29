import axios from 'axios';

const signUp = async (username, password) => {
  try {
    const response = await axios.post('/api/signup', { username, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const login = async (username, password) => {
  try {
    const response = await axios.post('/api/login', { username, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { signUp, login };

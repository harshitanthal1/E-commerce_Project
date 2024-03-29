import axios from 'axios';

const baseURL = 'https://your-api-url';

const api = axios.create({
  baseURL,
});

export default api;
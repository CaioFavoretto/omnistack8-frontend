import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tindev-caio-backend.herokuapp.com/'
});

export default api;

import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = () => {
  return axios.get(`${BASE_URL}/users`);
};

export const createUser = (userData) => {
  return axios.post(`${BASE_URL}/users`, userData);
};
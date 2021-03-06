import axios from 'axios';
import store from '@/store';
export default () => {
  const headers = {
    accessToken: store.getters.getUserToken
  }
  return axios.create({
    headers: headers,
    baseURL: 'http://localhost:3030/api',
  });
};
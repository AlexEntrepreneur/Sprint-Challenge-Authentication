import axios from 'axios';
import { API_URL } from '../constants';

export default function register(user, props) {
  return new Promise((resolve, reject) => {
    axios.post(`${API_URL}/register`, user)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.response.data);
      });
  });
}

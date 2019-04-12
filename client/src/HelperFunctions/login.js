import axios from 'axios';
import { API_URL } from '../constants';

const storeToken = (token) => {
  localStorage.setItem('token', token);
}

export default function login(user, props) {
  axios.post(`${API_URL}/login`, user)
  .then(res => {
    storeToken(res.data.token);
    props.history.push('/jokes');
  })
  .catch(err => {
    console.error(err.response.data.message);
  });
}

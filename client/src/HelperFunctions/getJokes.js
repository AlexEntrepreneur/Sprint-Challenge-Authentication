import axios from 'axios';
import { API_URL } from '../constants';

export default function getJokes(successHandler, failureHandler) {
  axios.get(`${API_URL}/jokes`, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  })
    .then(res => {
      successHandler(res.data);
    })
    .catch(err => {
      failureHandler(err);
    });
};

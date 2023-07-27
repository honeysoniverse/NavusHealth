/* eslint-disable no-param-reassign */
import axios from 'axios';

const placeHolderApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default placeHolderApi;

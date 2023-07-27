/* eslint-disable no-param-reassign */
import axios from 'axios';

const GOOGLE_MAPS_URL = 'https://maps.googleapis.com/maps/api';

const googleMapsApi = axios.create({
  baseURL: GOOGLE_MAPS_URL,
});

const handleSuccessResponse = (response) => response;
const handleErrorResponse = (error) => {
  console.log('error', error);

  let errorMapper = {};
  if (error.message === 'Network Error') {
    errorMapper = {
      title: 'Network Error',
      status: 0,
      message: 'Check your internet connection',
    };
  }

  const { status } = error.response;
  const errMessage = error.response.data.message;
  switch (status) {
    case 400:
      errorMapper = {
        title: 'Bad request',
        status: 400,
        message: errMessage,
        completed: false,
      };
      break;
    case 403: {
      errorMapper = {
        title: 'Forbidden',
        status: 403,
        message: errMessage, // Not authorized.
        completed: false,
      };
      break;
    }
    case 404:
      errorMapper = {
        title: 'Not found',
        status: 404,
        message: errMessage, // Resource does not exist.
        completed: false,
      };
      break;
    case 500:
      errorMapper = {
        title: 'Server error',
        status: 500,
        message: errMessage,
        completed: false,
      };
      break;
    default:
      errorMapper = {
        title: 'Unhandled error',
        status,
        message: errMessage,
        completed: false,
      };
      break;
  }

  return Promise.reject(errorMapper);
};

googleMapsApi.interceptors.request.use((error) => Promise.reject(error));

googleMapsApi.interceptors.response.use(
  (response) => handleSuccessResponse(response),
  (error) => handleErrorResponse(error)
);

export default googleMapsApi;

/* eslint-disable no-param-reassign */
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const useFormsAxios = () => {
  const { getAccessTokenSilently } = useAuth0();

  axios.interceptors.request.use(async (config) => {
    const api = process.env.REACT_APP_FORMS_API_DOMAIN;

    if (config.url.indexOf('http') === -1) {
      // eslint-disable-next-line no-param-reassign
      config.url = `${api}${config.url}`;
    }

    if (typeof config.headers.Authorization === 'undefined') {
      const token = await getAccessTokenSilently();
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  return {
    get: async (url, config) => axios.get(url, config),
    post: async (url, data, config) => axios.post(url, data, config),
  };
};

export default useFormsAxios;

/* eslint-disable no-param-reassign */
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const useNavPassAxios = () => {
  const { getAccessTokenSilently } = useAuth0();

  axios.interceptors.request.use(async (config) => {
    const api = process.env.REACT_APP_NAVUS_API_DOMAIN;

    if (config.url.indexOf('http') === -1) {
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
    delete: async (url, config) => axios.delete(url, config),
    post: async (url, data, config) => axios.post(url, data, config),
    put: async (url, data, config) => axios.put(url, data, config),
    patch: async (url, data, config) => axios.patch(url, data, config),
  };
};
export default useNavPassAxios;

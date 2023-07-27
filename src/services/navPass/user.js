import { endpoints } from './constants';
import useNavPassAxios from './instance';

const useUserApi = () => {
  const { get, patch } = useNavPassAxios();

  return {
    getUser: async () => get(`${endpoints.users}/me`),
    updateUser: async (data) => patch(`${endpoints.users}/me`, data),
    getOrders: async () => get(`${endpoints.orders}`),

  };
};

export default useUserApi;

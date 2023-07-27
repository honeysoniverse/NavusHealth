import { useState } from 'react';
import { useQuery } from 'react-query';
import useUserApi from '../../services/navPass/user';

export const useFetchOrders = () => {
  const { getOrders } = useUserApi();
  const[orders, setOrders] = useState([]);

  const { isLoading } = useQuery('getOrdersQuery', () => getOrders(), {
    onSuccess: async (res) => {
      setOrders(res.data)
     },
    onError: () => { },
  });

  return {
    isLoading,
    orders,
  };
};

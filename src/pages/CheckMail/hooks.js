import { useQuery } from 'react-query';
import useUserApi from '../../services/navPass/user';

export const useFetchUser = () => {
  const { getUser } = useUserApi();

  const { isLoading } = useQuery('getUserQuery', () => getUser(), {
    onSuccess: () => { },
    onError: () => { },
  });

  return {
    isLoading,
  };
};

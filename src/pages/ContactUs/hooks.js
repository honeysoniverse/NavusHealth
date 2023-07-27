import { useState } from 'react';
import { useQuery } from 'react-query';
import useUserApi from '../../services/navPass/user';

export const useFetchUser = () => {
  const [userData, setUserData] = useState([]);
  const { getUser } = useUserApi();

  const { isLoading } = useQuery('getUserQuery', () => getUser(), {
    onSuccess: (data) => {
      setUserData(data.data);
      // console.log(user)
      // user.address1 = user.streetAddress1;
      // user.address2 = user.streetAddress2;
      // delete user.streetAddress1;
      // delete user.streetAddress2;
      // console.log(user);
    },
    onError: (err) => {
      console.log('err', err);
    },
  });

  return {
    isLoading,
    userData,
  };
};

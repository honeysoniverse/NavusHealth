import { useMutation } from 'react-query';
import useUserApi from '../../services/navPass/user';
import { useUserStore } from '../../store/user';
import { useFormDataStore } from '../../store/formData';

export const useFetchUser = () => {
  const { user, setUser } = useUserStore();
  const { getUser } = useUserApi();

  const { isLoading } = useMutation(async() => getUser(), {
    onSuccess: async(data) => {
      setUser(data.data);
    },
    onError: (err) => {
      console.log('err', err);
    },
  });

  return {
    isUserDataLoading: isLoading,
    setUser,
    getUser,
    user,
  };
};
export const useUpdateUser = () => {
  const { updateUser } = useUserApi();
  const { data } = useFormDataStore();
  const { mutate, isLoading } = useMutation(() => updateUser(data), {
    onSuccess: () => {
    },
    onError: (error) => {
      window.alert(error.message);
    }
  });

  return {
    updateUser: mutate,
    isUpdatingProfile: isLoading,
  };
};


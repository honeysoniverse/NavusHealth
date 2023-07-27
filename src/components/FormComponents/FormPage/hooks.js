import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { pathNames } from '../../../config/pathNames';
import useFormsApi from '../../../services/forms/forms';
import { useFormDataStore } from '../../../store/formData';
import { useRegistrationsStore } from '../../../store/registrations';

export const useSubmitFormData = () => {
  const { postFormData } = useFormsApi();
  const { data, filesToUpload } = useFormDataStore();
  const { addRegistration } = useRegistrationsStore();
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(() => postFormData(data, filesToUpload), {
    onSuccess: (res) => {
      navigate(`${pathNames.register}/thankyou`);
      const registration = res.data;
      const { id } = registration;
      addRegistration(id);
    },
    onError: (error) => {
      window.alert(error.message);
    }
  });

  return {
    submitForm: mutate,
    isSubmitting: isLoading,
  };
};

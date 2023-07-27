import { useMutation } from 'react-query';
import { useFormDataStore } from '../../../store/formData';
import codesMessages from '../../../messages/codes';
import useToast from '../../../hooks/useToast';
import useCodesApi from '../../../services/navPass/codes';

export const useSendEmailVerificationCode = () => {
  const { setEmail } = useFormDataStore();
  const { postSendEmailCode } = useCodesApi();

  const { mutate, isLoading, error } = useMutation(({ email }) => postSendEmailCode(email), {
    onSuccess: (email) => {
      setEmail(email);
    },
  });

  return {
    isLoading,
    error,
    sendCodeToEmail: mutate,
  };
};

export const useVerifyEmailCode = () => {
  const { setEmailVerified } = useFormDataStore();
  const toast = useToast();
  const { postVerifyEmailCode } = useCodesApi();

  // eslint-disable-next-line max-len
  const { mutate, isLoading, error } = useMutation(({ email, verificationCode }) => postVerifyEmailCode(email, verificationCode), {
    onSuccess: (success) => setEmailVerified(success),
    onError: (err) => toast({
      title: codesMessages.genericErrorHeading,
      description: codesMessages.genericErrorDescription,
    }, err),
  });

  return {
    verifyCode: mutate,
    isLoading,
    error,
  };
};

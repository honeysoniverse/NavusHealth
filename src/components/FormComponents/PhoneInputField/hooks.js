import { useMutation } from 'react-query';
import useToast from '../../../hooks/useToast';
import { useFormDataStore } from '../../../store/formData';
import codesMessages from '../../../messages/codes';
import useCodesApi from '../../../services/navPass/codes';

export const useSendPhoneVerificationCode = () => {
  const { setPhone } = useFormDataStore();
  const { postSendSmsCode } = useCodesApi();
  const toast = useToast();

  const { mutate, isLoading } = useMutation(({ phone }) => postSendSmsCode(phone), {
    onSuccess: (phone) => { setPhone(phone); },
    // eslint-disable-next-line max-len
    onError: (err) => toast({ title: codesMessages.genericErrorHeading, description: codesMessages.genericErrorDescription }, err),
  });

  return {
    isLoading,
    sendSmsCode: mutate,
  };
};

export const useVerifyPhoneCode = () => {
  const { setPhoneVerified, setNoVerification } = useFormDataStore();
  const { patchVerifyPhone } = useCodesApi();
  const toast = useToast();

  // eslint-disable-next-line max-len
  const { mutate, isLoading } = useMutation(({ phone, verificationCode }) => patchVerifyPhone(phone, verificationCode), {
    onSuccess: () => {setPhoneVerified(true); setNoVerification(false)},
    // eslint-disable-next-line max-len
    onError: (err) => toast({ title: codesMessages.genericErrorHeading, description: codesMessages.genericErrorDescription }, err),
  });

  return {
    isLoading,
    verifyCode: mutate,
  };
};

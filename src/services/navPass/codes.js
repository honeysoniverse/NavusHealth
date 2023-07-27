import { endpoints } from './constants';
import useNavPassAxios from './instance';

const useCodesApi = () => {
  const { post, patch } = useNavPassAxios();

  return {
    postSendEmailCode: (email) => post(`${endpoints.emailCode}`, { emailTo: email }),
    postVerifyEmailCode: (email, verificationCode) => post(`${endpoints.users}`, { email, verificationCode }),
    postSendSmsCode: (phone) => post(`${endpoints.smsCode}`, { phoneNumber: phone }),
    patchVerifyPhone: (phone, verificationCode) => patch(
      `${endpoints.users}/me`,
      { phoneNumber: phone, phoneVerificationCode: verificationCode },
    ),
    patchUser: (data) => patch( `${endpoints.users}/me`, data)
  };
};

export default useCodesApi;

/* eslint-disable no-unused-expressions */
import { useEffect, useRef } from 'react';
import {
  Button,
  FormControl, FormLabel, HStack, Input, Text, useStyleConfig,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { colors } from '../../../resources/colors';
import { INPUT_FIELD_HEIGHT } from '../../../theme/constants';
import { useFormDataStore } from '../../../store/formData';
import { phoneValidationSchema } from './validationSchema';
import { useSendPhoneVerificationCode, useVerifyPhoneCode } from './hooks';
// import ChakraToast from '../ChakraToast';

const CodeInput = () => {
  const buttonStyles = useStyleConfig('Button', { variant: 'verification' });
  const { verifyCode } = useVerifyPhoneCode();
  const { sendSmsCode, isLoading } = useSendPhoneVerificationCode();
  const { phone, phoneVerified, setIsConfirm, phoneMessage } = useFormDataStore();

  const { formState: { errors } } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(phoneValidationSchema),
  });
  const phoneNum = Object.values(JSON.parse(phone.config.data));
  const codeRef = useRef();
  const onSubmit = async () => { verifyCode({ phone: `${phoneNum}`, verificationCode: codeRef.current.value });};
  const onResend = async () => sendSmsCode({ phone });
  const message = { verified: 'Phone Number Verified', code: `Code sent to ${phoneNum}` };
  useEffect(()=>{
    phoneVerified && setIsConfirm(true)
  },[])
  return (
    <HStack width="100%" display="flex" justifyContent="center" alignItems="flex-start">
      <FormControl height="95px" width={{ base: '50%', md: '100%', xl: '100%' }}>
        <Input
          borderColor={errors.email ? colors.carnationRed : colors.altoGray}
          borderWidth="1px"
          borderRadius={12}
          height={INPUT_FIELD_HEIGHT}
          bg={colors.alabasterGray}
          textColor={colors.black}
          placeholder="SMS Code"
          type="string"
          ref={codeRef}
        />
        <FormLabel
          fontSize={{ base: '12', md: '14', lg: '14' }}
          fontWeight="600"
          lineHeight="14px"
          textColor={!phoneVerified ? colors.malibuBlue : colors.verifiedGreen}
          paddingTop="4px"
        >
          {!phoneVerified ? message.code : message.verified}
          {/* <ChakraToast /> */}
        </FormLabel>
        <Text
          lineHeight="14px"
          textColor={colors.carnationRed}
          fontSize={10}
        >
          {phoneMessage}
        </Text>
      </FormControl>
      <Button
        __css={buttonStyles}
        fontSize={
          {
            base: 11, sm: 11, md: 11, lg: 12, xl: 12,
          }
        }
        isLoading={isLoading}
        onClick={onSubmit}
      >
        Verify
      </Button>
      <Button
        __css={buttonStyles}
        isLoading={isLoading}
        fontSize={
          {
            base: 11, sm: 11, md: 11, lg: 12, xl: 12,
          }
        }
        onClick={onResend}
      >
        Resend
      </Button>
    </HStack>
  );
};

CodeInput.propTypes = {
};

CodeInput.defaultProps = {

};

export default CodeInput;

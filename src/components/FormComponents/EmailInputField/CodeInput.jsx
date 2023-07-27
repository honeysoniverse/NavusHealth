import {
  Button,
  FormControl, FormLabel, HStack, Input, Text, useStyleConfig,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { colors } from '../../../resources/colors';
import { INPUT_FIELD_HEIGHT, INPUT_LABEL_TEXT_SIZE } from '../../../theme/constants';
import { emailVerificationCodeSchema } from './validationSchema';
import { useSendEmailVerificationCode, useVerifyEmailCode } from './hooks';
import { useFormDataStore } from '../../../store/formData';

const CodeInput = () => {
  const buttonStyles = useStyleConfig('Button', { variant: 'verification' });
  const { verifyCode } = useVerifyEmailCode();
  const { sendCodeToEmail, isLoading } = useSendEmailVerificationCode();
  const { email } = useFormDataStore();

  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(emailVerificationCodeSchema),
  });

  const onSubmit = async ({ emailCode }) => verifyCode({ email, verificationCode: emailCode });
  const onResend = async () => sendCodeToEmail({ email });
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      <HStack>
        <FormControl height="95px" width="100%">
          <FormLabel
            fontSize={INPUT_LABEL_TEXT_SIZE}
            fontWeight="600"
            lineHeight="14px"
            textColor={colors.codGray}
          >
            {`Verification code sent on: ${email}`}
          </FormLabel>
          <Input
            borderColor={errors.email ? colors.carnationRed : colors.altoGray}
            borderWidth="1px"
            borderRadius={12}
            height={INPUT_FIELD_HEIGHT}
            bg={colors.alabasterGray}
            textColor={colors.black}
            {...register('emailCode')}
            placeholder="Email Verification Code Input"
            type="emailCode"
          />
          <Text
            lineHeight="12px"
            textColor={colors.carnationRed}
            fontSize={10}
          >
            {errors.email?.message}
          </Text>
        </FormControl>
        <Button __css={buttonStyles} type="submit" isLoading={isSubmitting}>Verify</Button>
        <Button __css={buttonStyles} isLoading={isLoading} onClick={onResend}>Resend</Button>
      </HStack>
    </form>

  );
};

CodeInput.propTypes = {
};

CodeInput.defaultProps = {

};

export default CodeInput;

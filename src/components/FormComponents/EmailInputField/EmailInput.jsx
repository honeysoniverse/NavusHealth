import PropTypes from 'prop-types';
import {
  Button,
  FormControl, FormLabel, HStack, Input, Text, useStyleConfig,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { colors } from '../../../resources/colors';
import { INPUT_FIELD_HEIGHT } from '../../../theme/constants';
import { emailValidationSchema } from './validationSchema';
import { useSendEmailVerificationCode } from './hooks';

const EmailInput = ({
  label,
  placeholder,
  // disabled,
}) => {
  const buttonStyles = useStyleConfig('Button', { variant: 'verification' });
  const { sendCodeToEmail, isLoading } = useSendEmailVerificationCode();

  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(emailValidationSchema),
  });

  const onSubmit = async ({ email }) => sendCodeToEmail({ email });

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      <FormControl height="95px">
        <FormLabel
          fontSize={{
            base: '8', sx: '9', sm: '10', md: '12', lg: '14', xl: '16',
          }}
          fontWeight="600"
          lineHeight="14px"
          textColor={colors.codGray}
        >
          {label}
        </FormLabel>
        <HStack>
          <Input
            // readOnly={disabled}
            borderColor={errors.email ? colors.carnationRed : colors.altoGray}
            borderWidth="1px"
            borderRadius={12}
            height={INPUT_FIELD_HEIGHT}
            bg={colors.alabasterGray}
            textColor={colors.black}
            {...register('email')}
            placeholder={placeholder}
            type="email"
          />
          <Button
            fontSize={{
              base: '8', sm: '9', md: '10', lg: '11', xl: '12',
            }}
            __css={buttonStyles}
            type="submit"
            isLoading={isSubmitting || isLoading}
          >
            Confirm
          </Button>
        </HStack>

        <Text
          lineHeight="12px"
          textColor={colors.carnationRed}
          fontSize={10}
        >
          {errors.email?.message}
        </Text>
      </FormControl>
    </form>

  );
};

EmailInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.oneOfType([PropTypes.object]),
  error: PropTypes.string,
  // disabled: PropTypes.bool,
};

EmailInput.defaultProps = {
  error: '',
  register: {},
  // disabled: false,
};

export default EmailInput;

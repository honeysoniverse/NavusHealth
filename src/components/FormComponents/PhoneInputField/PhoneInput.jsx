/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  FormControl, FormLabel, HStack, Text, useStyleConfig, Fade,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import PhoneInput from 'react-phone-number-input';
import { useFormContext, useForm } from 'react-hook-form';
import { colors } from '../../../resources/colors';
import { phoneValidationSchema } from './validationSchema';
import { useSendPhoneVerificationCode } from './hooks';
import 'react-phone-number-input/style.css';
import { useFormDataStore } from '../../../store/formData';
// import { useUserStore } from '../../../store/user';
import { useFetchUser } from '../../../pages/MyProfile/hooks';


const PhoneInputs = ({
  label,
  id,
  placeholder,
  valueId,
}) => {
  const { register, formState: { errors } } = useFormContext();
  const { onBlur, name, ref } = register(valueId); 
  const [value, setValue] = useState('');
  // const [change, isChange] = useState(false);
  const buttonStyles = useStyleConfig('Button', { variant: 'verification' });
  const { sendSmsCode, isLoading } = useSendPhoneVerificationCode();
  const { phoneVerified, updateFormDataField, setNoVerification, phoneMessage } = useFormDataStore();
  const { user } = useFetchUser();
  const { formState: { isSubmitting } } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(phoneValidationSchema),
  });
  const onSubmit = async () => {sendSmsCode({ phone: value }); setNoVerification(true);};
  const message = { verified: 'Phone Number Verified' };
  // phoneVerified || user.phone && updateFormDataField(valueId, value ? value : user.phone)
  // const phoneNum = Object.values(JSON.parse(phone.config.data));
  useEffect(() => {
    updateFormDataField(valueId, user.phone);
    // !isUserDataLoading && (user.phone && updateFormDataField(valueId, user.phone) && console.log("Hi")) ;
  }, []);
  const onSubmitNull = (e) => {
    e.preventDefault();
  };
  return (
    <FormControl height="95px">
      <FormLabel
        fontSize={
          {
            base: '8', sx: '9', sm: '10', md: '12', lg: '14', xl: '16',
          }
        }
        fontWeight="600"
        lineHeight="14px"
        textColor={colors.codGray}
      >
        {label}
      </FormLabel>
      <HStack width="100%" display="flex" justifyContent="space-evenly" alignItems="center">
        <PhoneInput
          defaultCountry="US"
          limitMaxLength
          type="string"
          id={id}
          cursor="pointer"
          // {...isChange}
          placeholder={placeholder}
          // disabled={user.phone ? true : false}
          style={{
            borderColor: errors.phone ? colors.carnationRed : colors.altoGray,
            borderWidth: '1px',
            borderRadius: '18px',
            width: '100%',
            height: '50px',
            textColor: colors.codGray,
            background: colors.white,
            fontWeight: '700',
            padding: '8px',
          }}
          value={user.phone ? user.phone : value}
          onChange={setValue}
          ref={ref}
          name={name}
          onBlur={onBlur}
        />
        <Fade in={value !== '' ? true : false} transition="easeIn">
          <Button
            fontSize={
              {
                base: 11, sm: 12, md: 14, lg: 15, xl: 15,
              }
            }
            display={value !== '' ? 'block' : 'none'}
            __css={buttonStyles}
            isLoading={isSubmitting || isLoading}
            type="submit"
            onClick={value ? onSubmit : onSubmitNull}
          // disabled={!isChange}
          >
            {/* {isChange ? 'Change' : 'Confirm'} */}
            Confirm
          </Button>
        </Fade>
      </HStack>
      <FormLabel
        fontSize={{ base: '12', md: '14', lg: '14' }}
        fontWeight="600"
        lineHeight="14px"
        textColor={colors.azureRadianceBlue}
        paddingTop="4px"
        display={phoneVerified ? 'block' : 'none'}
      >
        {phoneVerified && message.verified}
      </FormLabel>
      <Text
       lineHeight="12px"
       textColor={colors.carnationRed}
       fontWeight="600"
       fontSize={{
         base: '7', sm: '9', md: '10', lg: '12', xl: '14',
       }}
      >
        {phoneMessage}
      </Text>
    </FormControl>
  );
};

PhoneInputs.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  valueId: PropTypes.string.isRequired,
};

PhoneInputs.defaultProps = {
};

export default PhoneInputs;

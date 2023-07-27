/* eslint-disable max-len */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import {
  FormControl, FormLabel, Input, Text,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { colors } from '../../../resources/colors';
import { useUserStore } from '../../../store/user';
import { useFormDataStore } from '../../../store/formData';

const FormInput = ({
  label,
  id,
  placeholder,
  valueId,
  cursor,
  disabled,
}) => {

  const { register, formState: { errors } } = useFormContext();
  const { onBlur, name, ref } = register(valueId); 
  const { user } = useUserStore();
  const { updateFormDataField, data } = useFormDataStore();
  const handleOnChange = (event) => {
    // if(valueId === 'address1' || 'address2') {
    //   console.log("t1")
    //   updateFormDataField((valueId==='address1') ? 'streetAddress1' : 'streetAddress2', event.target.value)
    // }
    // else updateFormDataField(valueId, event.target.value);}
    updateFormDataField(valueId, event.target.value);
  };

  return (
    <FormControl height="95px" width="100%">
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
      <Input
        key={id}
        // disabled={disabled ? true : false}
        cursor={cursor}
        // value={user[valueId] ? user[valueId] : 'address1' in user ? user.address1 : 'address2' in user ? user.address2 : data[valueId]}
        value={valueId === 'email' ? user[valueId] : data[valueId] ?? null ?? user[valueId]}
        // value={ valueId==="email" ? user[valueId] || user[valueId] || data[valueId] : ''}
        borderColor={errors[valueId] ? colors.carnationRed : colors.altoGray}
        borderWidth="1px"
        borderRadius={12}
        height="50px"
        background={disabled ? colors.altoGray : colors.white}
        // background={user[valueId] ? colors.altoGray : user.address1 === '' ? colors.altoGray : user.address1 === '' ? colors.altoGray : colors.alabasterGray}
        textColor={colors.black}
        ref={ref}
        name={name}
        onBlur={onBlur}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
      <Text
        lineHeight="12px"
        textColor={colors.carnationRed}
        fontSize={{
          base: '8', sx: '9', sm: '10', md: '12', lg: '14', xl: '16',
        }}
      >
        {errors[valueId]?.message}
      </Text>
    </FormControl>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  valueId: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  // error: PropTypes.string,
  cursor: PropTypes.string,
  disabled: PropTypes.bool,
};

FormInput.defaultProps = {
  // error: '',
  cursor: 'pointer',
  disabled: false,
};

export default FormInput;

/* eslint-disable no-unused-vars */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormControl, FormLabel, Text, Input,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import moment from 'moment';
import { colors } from '../../../resources/colors';
import { useUserStore } from '../../../store/user';
import { useFormDataStore } from '../../../store/formData';
import { normalizeDateFromServerToUSFormat } from '../../../utils/normalizationFunctions';
import { useFormStore } from '../../../store/form';

const DateTimePicker = ({
  label,
  // error,
  valueId,
  cursor,
}) => {
  const {formPages} = useFormStore();
  const IS_PROFILE_PAGE = (formPages.length === 1);
  const { register, formState: { errors } } = useFormContext();
  const { onBlur, name, ref } = register(valueId); 
  const [isDOB, setIsDOB] = useState(false);
  const { updateFormDataField, data } = useFormDataStore();
  const { user } = useUserStore();
  useEffect(() => {
    user[valueId] && setIsDOB(true);
    !IS_PROFILE_PAGE && isDOB && updateFormDataField(valueId, user[valueId]);
  }, [isDOB]);
  const onChange = (event) => {
    const { value } = event.target;
    const normalized = normalizeDateFromServerToUSFormat(value);
    updateFormDataField(valueId, normalized);
  };
  return (
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
      <Input
        readOnly={user[valueId] ? true : false}
        background={user[valueId] ? colors.altoGray : colors.white}
        type={user[valueId] ? '' : 'date'}
        cursor={cursor}
        defaultValue={user[valueId] ?? data[valueId] ?? moment().format('yyyy-MM-dd')}
        onChange={onChange}
        ref={ref}
        onBlur={onBlur}
        name={name}
        borderWidth="1px"
        // format="yyyy-MM-dd"
        borderRadius={12}
        height="50px"
        textColor={colors.black}

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

DateTimePicker.propTypes = {
  label: PropTypes.string.isRequired,
  // error: PropTypes.string,
  valueId: PropTypes.string,
  cursor: PropTypes.string,
};

DateTimePicker.defaultProps = {
  // error: '',
  valueId: 'birthDate',
  cursor: 'pointer',
};

export default DateTimePicker;

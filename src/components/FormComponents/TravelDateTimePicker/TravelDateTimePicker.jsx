/* eslint-disable no-unused-vars */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormControl, FormLabel, Text, Input, color, HStack,
} from '@chakra-ui/react';
import moment from 'moment';
import { colors } from '../../../resources/colors';
import { useUserStore } from '../../../store/user';
import { useFormDataStore } from '../../../store/formData';
import { normalizeDateFromServerToUSFormat } from '../../../utils/normalizationFunctions';

const TravelDateTimePicker = ({
  label,
  error,
  valueId,
  cursor,
}) => {
  const [isDOB, setIsDOB] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const { updateFormDataField, data } = useFormDataStore();
  const { user } = useUserStore();
  useEffect(() => {
    user[valueId] && setIsDOB(true);
    isDOB && updateFormDataField(valueId, user[valueId]);
  }, [isDOB]);
  const handleDate = (event) => {
    const { value } = event.target;
    const normalized = normalizeDateFromServerToUSFormat(value);

    setDate(value);
  };
  const handleTime = (event) => {
    const { value } = event.target;
    setTime(value);
  };


  useEffect(()=>{
    date!=='' && time!=='' && updateFormDataField(valueId, `${date} ${time}`)
  },[date!=='' && time!==''])
  return (
    <FormControl height="95px" width="100%">
      <HStack width="100%" display ="flex" alignItems="center" justifyContent="stretch">
      <FormLabel
      flex={1}
        fontSize={{
          base: '8', sx: '9', sm: '10', md: '12', lg: '14', xl: '16',
        }}
        fontWeight="600"
        lineHeight="14px"
        textColor={colors.codGray}
      >
        {label}
      </FormLabel>
      <FormLabel  fontSize={{
          base: '8', sx: '9', sm: '10', md: '12', lg: '14', xl: '16',
        }}
        fontWeight="600"
        lineHeight="14px"
        textColor={colors.codGray}
        flex={1}
        >
          Time:
      </FormLabel>
      </HStack>
      <HStack width="100%" alignItems="center" justifyContent="center">
      <Input
      flex={1}
        // readOnly={user[valueId] ? true : false}
        background={colors.white}
        type='date'
        cursor={cursor}
        defaultValue={data[valueId] ? data[valueId] : moment().calendar('DD-MM-YYYY')}
        onChange={handleDate}
        borderWidth="1px"
        borderRadius={12}
        height="50px"
        textColor={colors.black}

      />
        <Input
        flex={1}
          width= {{
            md: "300px",
            xl: "400px",
            lg: "400px",
            sm: "200px",
            base: "150px",
         }}
        // readOnly={user[valueId] ? true : false}
        background={colors.white}
        type='time'
        cursor={cursor}
        defaultValue={data[valueId] ? data[valueId] : moment().calendar('DD-MM-YYYY')}
        onChange={handleTime}
        borderWidth="1px"
        borderRadius={12}
        height="50px"
        textColor={colors.black}

      />
      </HStack>
      <Text
        lineHeight="12px"
        textColor={colors.codGray}
        fontSize={10}
      >
        {error}
      </Text>
    </FormControl> 
  );
};

TravelDateTimePicker.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  valueId: PropTypes.string,
  cursor: PropTypes.string,
};

TravelDateTimePicker.defaultProps = {
  error: '',
  valueId: 'TravelDateTime',
  cursor: 'pointer',
};

export default TravelDateTimePicker;

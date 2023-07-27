/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-unused-expressions */
import PropTypes from 'prop-types';
import {
  FormControl, FormLabel, Select, Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { colors } from '../../../resources/colors';
import {
  INPUT_FIELD_BORDER_COLOR, INPUT_FIELD_BORDER_RADIUS, INPUT_FIELD_HEIGHT, INPUT_LABEL_TEXT_SIZE,
} from '../../../theme/constants';
import { useFormDataStore } from '../../../store/formData';
import { useUserStore } from '../../../store/user';

const Dropdown = ({
  label,
  placeholder,
  values,
  error,
  valueId,
  cursor,
  isState,
  isInsurance,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState();
  const [isSaved, setIsSaved] = useState(false);
  const [previewValue, setPreviewValue] = useState('');
  const { user } = useUserStore();
  const { updateFormDataField, data } = useFormDataStore();
  useEffect(() => {
    user[valueId] && setIsSaved(true);
    isSaved && updateFormDataField(valueId, user[valueId]);
  }, [isSaved]);
  // const dropDownData = user[valueId] ? user[valueId] : data[valueId];
  const handleChange = ({ target }) => {
    const json = JSON.parse(target.value);
    updateFormDataField(valueId, isState || isInsurance ? json.value.name : json.value);
    setValue(json);
    setPreviewValue(target.value);
  };

  return (
    <FormControl height="95px" width="100%">
      <FormLabel
        fontSize={INPUT_LABEL_TEXT_SIZE}
        fontWeight="600"
        lineHeight="14px"
        textColor={colors.codGray}
      >
        {label}
      </FormLabel>
      <Select
        // isDisabled={user[valueId] ? true : false}
        placeholder={data[valueId] ?? placeholder}
        value={previewValue || ''}
        // value={previewValue ?? data[valueId] ?? null ?? user[valueId]}
        cursor={cursor}
        onChange={handleChange}
        bg={colors.white}
        borderRadius={INPUT_FIELD_BORDER_RADIUS}
        height={INPUT_FIELD_HEIGHT}
        defaultValue={data[valueId] ?? user[valueId] ?? null}
        iconColor={colors.codGray}
        borderColor={INPUT_FIELD_BORDER_COLOR}
      >
        {values.map(
          (item) => (
            <option key={item.id} value={JSON.stringify(item)}>
              {item.label}
            </option>
          ),
        )}
      </Select>
      <Text
        lineHeight="12px"
        textColor={colors.carnationRed}
        fontSize={10}
      >
        {error}
      </Text>
    </FormControl>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  valueId: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  values: PropTypes.oneOfType([PropTypes.array]).isRequired,
  cursor: PropTypes.string,
  isInsurance: PropTypes.bool,
  isState: PropTypes.bool,
};

Dropdown.defaultProps = {
  error: '',
  placeholder: 'Select',
  cursor: 'pointer',
  isState: false,
  isInsurance: false,
};

export default Dropdown;

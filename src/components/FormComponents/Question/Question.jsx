/* eslint-disable max-len */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable operator-linebreak */
import PropTypes from 'prop-types';
import {
  FormLabel, HStack, useRadioGroup, VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { colors } from '../../../resources/colors';
import { useFormDataStore } from '../../../store/formData';
import CustomRadio from './CustomRadio';
import { parseStringToBoolean } from '../../../utils/utilFunctions';

const Question = ({
  children,
  question,
  answers,
  valueId,
}) => {
  const { data, updateFormDataField } = useFormDataStore();
  const setDependantChildren = (reference) => {
    const toRender = children.filter((child) => child.props.id === reference);
    return toRender;
  };
  // eslint-disable-next-line max-len
  const [dependantChildrenToRender, setDependantChildrenToRender] = useState(setDependantChildren(data[valueId]?.reference));
  const onChange = (value) => {
    const val = parseStringToBoolean(value);
    const selected = answers.find((answer) => answer.value === val);
    // eslint-disable-next-line no-param-reassign
    updateFormDataField(valueId, value = String(selected.value));
    const { reference } = selected;
    const child = setDependantChildren(reference);
    setDependantChildrenToRender(child);
  };
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: `radio-input-${valueId}`,
    onChange,
    value: data[valueId],
  });
  const group = getRootProps();
  return (
    <>
      {valueId !== 'pregnant' ?
        <VStack style={{
          width: '100%', justifyContent: 'space-around', display: 'flex', marginBottom: '16px', alignItems: 'flex-start', padding: '0px 8px',
        }}
        >
          <FormLabel
            fontSize={
              {
                base: '12', sm: '12', md: '14', lg: '16', xl: '18',
              }
            }
            fontWeight="600"
            lineHeight="18px"
            textColor={colors.codGray}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {question}
          </FormLabel>
          <HStack {...group} display="flex" justifyContent="center" alignItems="center">
            {answers.map((item) => {
              const { label, value, id } = item;
              const radio = getRadioProps({ value: value.toString() });
              return (
                <CustomRadio key={id} {...radio}>
                  {label}
                </CustomRadio>
              );
            })}
          </HStack>
        </VStack> : data.gender === 'female' && valueId === 'pregnant' &&
        <VStack style={{
          width: '100%', justifyContent: 'space-around', display: 'flex', marginBottom: '16px', alignItems: 'flex-start', padding: '0px 8px',
        }}
        >
          <FormLabel
            fontSize={
              {
                base: '12', sm: '12', md: '14', lg: '16', xl: '18',
              }
            }
            fontWeight="600"
            lineHeight="18px"
            textColor={colors.codGray}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {question}
          </FormLabel>
          <HStack {...group} display="flex" justifyContent="center" alignItems="center">
            {answers.map((item) => {
              const { label, value, id } = item;
              const radio = getRadioProps({ value: value.toString() });
              return (
                <CustomRadio key={id} {...radio}>
                  {label}
                </CustomRadio>
              );
            })}
          </HStack>
        </VStack>}
      {dependantChildrenToRender}
    </>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  valueId: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  answers: PropTypes.oneOfType([PropTypes.array]).isRequired,
  children: PropTypes.instanceOf(Array),
};

Question.defaultProps = {
  error: '',
  placeholder: 'Select',
  children: [],
};

export default Question;

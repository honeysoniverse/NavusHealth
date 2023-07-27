/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { Box, useRadio } from '@chakra-ui/react';
import { colors } from '../../../resources/colors';

const CustomRadio = ({ ...props }) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        fontWeight="600"
        borderWidth="1px"
        borderRadius="md"
        bg={colors.white}
        fontSize={{
          base: '12', sm: '14', md: '14', lg: '16', xl: '18',
        }}
        boxShadow="md"
        _checked={{
          bg: colors.malibuBlue,
          color: 'white',
          borderColor: colors.silverChalice,
        }}
        py={{ base: '2', sm: '3', md: '3.5' }}
        px={{ base: '2.5', sm: '4', md: '5' }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

CustomRadio.propTypes = {
  // id: PropTypes.string.isRequired,
  // label: PropTypes.string.isRequired,
  // value: PropTypes.string.isRequired || PropTypes.number.isRequired || PropTypes.bool.isRequired,
};

CustomRadio.defaultProps = {
  // value: 'customRadioDefaultValue',
};

export default CustomRadio;

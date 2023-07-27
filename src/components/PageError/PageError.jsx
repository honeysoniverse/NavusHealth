import PropTypes from 'prop-types';
import {
  Center,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaExclamation } from 'react-icons/fa';

/**
 * @TODO Temporary page error
 */
const PageError = ({ icon: ErrorIcon, message }) => (
  <Center flexGrow={1} data-test-id="8fecf43a">
    <VStack
      data-test-id="0708af02"
      border="1px solid"
      borderColor="gray.300"
      rounded="lg"
      padding={6}
      justifyContent="center"
    >
      <Icon boxSize={10} as={ErrorIcon} color="gray.400" />
      <Text color="gray.400">{message}</Text>
    </VStack>
  </Center>
);

PageError.propTypes = {
  icon: PropTypes.func,
  message: PropTypes.string,
};

PageError.defaultProps = {
  icon: FaExclamation,
  message: 'Something went wrong', // TODO: translation
};

export default PageError;

import PropTypes from 'prop-types';
import { useBreakpointValue, VStack, HStack } from '@chakra-ui/react';

const Form = ({
  id,
  // eslint-disable-next-line no-unused-vars
  children,
}) => {
  const isMdBreakpoint = useBreakpointValue({ base: false, md: true });

  return (
    <HStack
      display="flex"
      justifyContent="center"
      marginLeft={
        {
          base: '0px', sm: '0px', md: '120px', lg: '180px', xl: '240px',
        }
      }
    >
      <VStack
        id={id}
        alignItems="center"
        // border="2px solid black"
        paddingLeft={isMdBreakpoint ? '50px' : '0px'}
        paddingRight={isMdBreakpoint ? '50px' : '0px'}
      >
        {children}
      </VStack>
    </HStack>
  );
};

Form.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.instanceOf(Array),
};

Form.defaultProps = {
  children: [],
};

export default Form;

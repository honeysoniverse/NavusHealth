import PropTypes from 'prop-types';
import { useBreakpointValue, VStack } from '@chakra-ui/react';
import { colors } from '../../../resources/colors';

const ProfileWrapper = ({
  id,
  children,
}) => {
  const isMdBreakpoint = useBreakpointValue(
    {
      md: true, base: false,
    },
  );

  return (
    <VStack
      id={id}
      bg={colors.wildSandGray}
      alignItems="center"
      paddingTop="50px"
      paddingBottom="50px"
      paddingLeft={isMdBreakpoint ? '50px' : '8px'}
      paddingRight={isMdBreakpoint ? '50px' : '8px'}
      // height="100vh"
      width={
        {
          base: '375px', sx: '480px', sm: '600px', md: '768px', lg: '1024px', xl: '1440px',
        }
      }
      height="auto"
    >
      {children}
    </VStack>
  );
};

ProfileWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.instanceOf(Array),
};

ProfileWrapper.defaultProps = {
  children: [],
};

export default ProfileWrapper;

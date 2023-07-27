import PropTypes from 'prop-types';
import { useBreakpointValue, VStack } from '@chakra-ui/react';
import { colors } from '../../../resources/colors';
import FormStepsIndicator from '../FormStepsIndicator/FormStepsIndicator';
import { useFormStore } from '../../../store/form';

const PagesWrapper = ({
  id,
  children,
}) => {
  const { formPages } = useFormStore();
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
      borderRadius="12px"
      boxShadow="dark-lg"
      width={
        {
          base: '100%', sm: '100%', md: '600px', lg: '800px', xl: '800px',
        }
      }
    >
      {formPages.length > 1 && <FormStepsIndicator />}
      {children}
    </VStack>
  );
};

PagesWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.instanceOf(Array),
};

PagesWrapper.defaultProps = {
  children: [],
};

export default PagesWrapper;

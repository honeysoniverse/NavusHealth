import { useBreakpointValue, VStack } from '@chakra-ui/react';

const HorizontalSeparator = () => {
  const isMdBreakpoint = useBreakpointValue({ base: false, md: true });

  return (
    <VStack
      bg="#CDCDCD"
      height="1px"
      alignItems="center"
      paddingLeft={isMdBreakpoint ? '36px' : '0px'}
      paddingRight={isMdBreakpoint ? '36px' : '0px'}
    />
  );
};

HorizontalSeparator.propTypes = {
};

HorizontalSeparator.defaultProps = {
};

export default HorizontalSeparator;

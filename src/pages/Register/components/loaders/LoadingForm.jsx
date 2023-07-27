import { VStack, Text, useBreakpointValue } from '@chakra-ui/react';
import { Plane } from 'react-loader-spinner';
import { colors } from '../../../../resources/colors';

const LoadingForm = () => {
  const isMdBreakpoint = useBreakpointValue(
    {
      md: true, base: false,
    },
  );
  const { innerHeight, innerWidth } = window;
  const loaderDimension = innerWidth / 3;

  return (
    <VStack
      height={innerHeight * 0.75}
      width={isMdBreakpoint ? innerHeight * 0.75 : innerWidth}
      justifyContent="center"
      borderRadius={8}
      backgroundColor="white"

    >
      <Text variant="heading1">Please Wait </Text>
      <Plane
        color={colors.bayBlue}
        width={loaderDimension}
        height={loaderDimension}
        secondaryColor={colors.azureRadianceBlue}
      />
      <Text variant="heading2">Loading ...</Text>
    </VStack>
  );
};

export default LoadingForm;

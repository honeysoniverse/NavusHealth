/* eslint-disable no-unused-vars */
/* eslint-disable max-len */

import { VStack, Text, Box, HStack, Spinner } from '@chakra-ui/react';
// import { Grid } from 'react-loader-spinner';
import { colors } from '../../../../resources/colors';
import ContentWrapper from '../../../../components/ContentWrapper/ContentWrapper';

const GeneratingQRCodeLoader = () => {
  const { innerWidth } = window;
  const loaderDimension = innerWidth / 16;

  return (
    <ContentWrapper style={{
      justifyContent: 'center',
    }}
    >
      <VStack style={{
        justifyContent: 'center',
      }}
      >
        {/* <Grid
        color={colors.black}
        radius="6px"
        width={loaderDimension}
        height={loaderDimension}
        secondaryColor={colors.azureRadianceBlue}
      /> */}
        <Box display="flex" justifyContent="center" alignItems="center" marginTop="200px" background={colors.altoGray} width="350px" height="100px" borderRadius={10}>
          <VStack>
            <HStack>
              <Text>Uploading Files...Please Wait</Text>
              <Spinner />
            </HStack>
          </VStack>
        </Box>              </VStack>
    </ContentWrapper>
  );
};

export default GeneratingQRCodeLoader;

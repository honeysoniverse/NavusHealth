/* eslint-disable max-len */

import { VStack, Spinner, HStack, Box, Text, } from '@chakra-ui/react';
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper';
import QRCodePreview from '../components/QRCodePreview';
import { useSubmitFormData } from '../../../components/FormComponents/FormPage/hooks';
// import useFormsApi from '../../../services/forms/forms';
import { colors } from '../../../resources/colors';

const ThankYou = () => {
  const { isSubmitting, showSpinner } = useSubmitFormData();
  console.log(showSpinner)
  // const {showQR} = useFormsApi()
  return(
  <ContentWrapper style={{
    justifyContent: 'center',
  }}
  >
    <VStack style={{
      justifyContent: 'center',
    }}
    >
        {isSubmitting && <Box display="flex" justifyContent="center" alignItems="center" marginTop="200px" background={colors.alabasterGray} width="350px" height="100px" borderRadius={10}>
          <HStack>
            <Text>Uploading Files...Please Wait</Text>
          <Spinner />
          </HStack>
          </Box>}
        {!isSubmitting && 
      <QRCodePreview /> }
    </VStack>
  </ContentWrapper>
  );}

export default ThankYou;

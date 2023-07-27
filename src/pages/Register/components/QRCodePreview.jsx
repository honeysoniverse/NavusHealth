/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */


import PropTypes from 'prop-types';
import { VStack, Text, useBreakpointValue, Spinner, Button, useStyleConfig } from '@chakra-ui/react';
import QRCode from 'react-qr-code';
import toImg from 'react-svg-to-image';
import { useRegistrationsStore } from '../../../store/registrations';
import { colors } from '../../../resources/colors';
import { useSubmitFormData } from '../../../components/FormComponents/FormPage/hooks';

const QRCodePreview = ({ value }) => {

  const buttonStyles = useStyleConfig('Button', { variant: 'verification', marginTop: "24px" });
  const { isSubmitting } = useSubmitFormData();
  const isMdBreakpoint = useBreakpointValue({ base: false, md: true });
  const { innerHeight, innerWidth } = window;
  const loaderDimension = isMdBreakpoint ? innerHeight * 0.3 : innerWidth * 0.66;
  const { latestRegistration } = useRegistrationsStore();
  const downloadQR = () => {
    toImg("#qrCode_img", 'QR-Code', {
      download: true,
    });
  }

  return (
    <VStack
      display="flex"
      alignItems="center"
      height={isMdBreakpoint ? innerHeight * 0.70 : innerHeight * 0.70}
      width={isMdBreakpoint ? innerWidth * 0.70 : innerWidth}
      justifyContent="space-evenly"
      borderRadius={8}
      backgroundColor="white"

    >
        <>
          {/* eslint-disable-next-line max-len */}
          <Text variant="heading2" textAlign="center" style={{ marginTop: '8px', color: colors.azureRadianceBlue }}>Thanks for registering with us. Please save the QR code for faster check-in</Text>
          {/* eslint-disable-next-line no-unneeded-ternary */}
          <QRCode value={value ? value : latestRegistration} size={loaderDimension} zIndex={5} id="qrCode_img"
          />
          {
            !value &&
            <>
              {/* <Text variant="heading1">Thank you!</Text> */}
              {/* <Text variant="heading2">Redirecting to My Events Page</Text>
        <Spinner /> */}
              <Button
                fontSize={
                  {
                    base: 11, sm: 12, md: 14, lg: 15, xl: 15,
                  }
                }
                __css={buttonStyles}
                onClick={downloadQR}
                width="auto"
              >
                Download QR Code
              </Button>
            </>

          }</>
    </VStack>
  );
};


QRCodePreview.propTypes = {
  value: PropTypes.string,
};

QRCodePreview.defaultProps = {
  value: '',
};

export default QRCodePreview;

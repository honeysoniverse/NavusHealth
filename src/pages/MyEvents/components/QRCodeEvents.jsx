/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { VStack, Text, useBreakpointValue } from '@chakra-ui/react';
import QRCode from 'react-qr-code';
import { colors } from '../../../resources/colors';

const QRCodeEvents = ({ value }) => {
  const isMdBreakpoint = useBreakpointValue({ base: false, md: true });
  const { innerHeight, innerWidth } = window;
  const loaderDimension = isMdBreakpoint ? innerWidth / 6 : innerHeight / 3;

  return (
    <VStack style={{
      height: innerHeight / 2,
      width: innerHeight / 2,
      justifyContent: 'space-between',
      borderRadius: 8,
      backgroundColor: 'white',
      padding: '16px',
    }}
    >
      <Text variant="heading2" color={colors.azureRadianceBlue} style={{ marginTop: '8px' }}>Scan the code to get your Registration ID</Text>
      <QRCode value={value} size={loaderDimension} />
    </VStack>
  );
};

QRCodeEvents.propTypes = {
  value: PropTypes.string,
};

QRCodeEvents.defaultProps = {
  value: '',
};

export default QRCodeEvents;

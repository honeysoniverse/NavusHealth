import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import {
  VStack, FormLabel, Box, HStack, Button, Icon, Image,
} from '@chakra-ui/react';
import SignaturePad from 'react-signature-canvas';
import { FaPen } from 'react-icons/fa';
import Popup from 'reactjs-popup';
import { colors } from '../../../resources/colors';
import { INPUT_LABEL_TEXT_SIZE } from '../../../theme/constants';
import { useFormDataStore } from '../../../store/formData';

const Signature = ({ label, valueId }) => {
  const {data, updateFormDataField} = useFormDataStore();
  const [modalOpen, setModalOpen] = useState(false);
  const [signature, setSignature] = useState(null);
  const { addUploadFile, removeUploadFile } = useFormDataStore();

  const signatureRef = useRef({});

  const clear = () => {
    signatureRef.current?.clear();
    removeUploadFile(valueId);
  };
  const save = () => {
    const trimmedCanvas = signatureRef.current.getTrimmedCanvas();
    trimmedCanvas.toBlob((blob) => {
      const file = new File([blob], "signature.png", { type: "image/png" });
      addUploadFile(valueId, file);
      setSignature(trimmedCanvas.toDataURL('image/png'));
      updateFormDataField(valueId, signature);
      setModalOpen(false);
    }, 'image/png');
  };

  return (
    <VStack width="100%" alignItems="flex-start">
      <FormLabel
        fontSize={INPUT_LABEL_TEXT_SIZE}
        fontWeight="600"
        lineHeight="14px"
        textColor={colors.codGray}
      >
        {label}
        <Icon as={FaPen} size={12} marginLeft="8px" />
      </FormLabel>
      <HStack>
        <Box
          width="150px"
          height="100px"
          borderWidth="1px"
          borderRadius="10px"
          borderColor={colors.altoGray}
          padding="2px"
        >
          {data[valueId] || signature && (
          <Image
            src={data[valueId] || signature}
            style={{ width: '100%', height: '100%' }}
          />
          )}
        </Box>
        <VStack alignItems="flex-start">
          <Button onClick={() => setModalOpen(true)}>Open signature pad</Button>
          {/* <Button onClick={clear}>Clear signature</Button> */}
        </VStack>
      </HStack>
      <Popup
        modal
        open={modalOpen}
        overlayStyle={{ backgroundColor: 'rgba(60, 60, 60, 0.5)' }}
        onClose={() => setModalOpen(false)}
      >
        <VStack>
          <HStack width="100%" justifyContent="flex-end"><Button onClick={() => setModalOpen(false)}>X</Button></HStack>
          <VStack backgroundColor="white" padding="8px" bg={colors.altoGray}>
            <SignaturePad
              backgroundColor="white"
              penColor="black"
              canvasProps={{
                className: 'signatureCanvas',
                height: '200px',
                width:
                {
                  sm: '350px', md: '480px', lg: '600px', xl: '600px',
                },
                placeholder: 'Your Signature',
              }}
              ref={signatureRef}
            />
          </VStack>
          <HStack>
            <Button onClick={save}>Save</Button>
            <Button onClick={clear}>Clear</Button>
          </HStack>
        </VStack>
      </Popup>
    </VStack>
  );
};

Signature.propTypes = {
  label: PropTypes.string.isRequired,
  valueId: PropTypes.string.isRequired,
};

Signature.defaultProps = {
};

export default Signature;

import PropTypes from 'prop-types';
import {
  Button,
  FormControl, FormLabel, Input, Icon, VStack, Text, HStack,
} from '@chakra-ui/react';
import { FaUpload, FaTrash } from 'react-icons/fa';
import { useRef } from 'react';
import { colors } from '../../../resources/colors';
import { INPUT_LABEL_TEXT_SIZE } from '../../../theme/constants';
import { useFormDataStore } from '../../../store/formData';

const FileUpload = ({
  label,
  valueId,
}) => {
  const inputFieldRef = useRef();
  const { addUploadFile, removeUploadFile, filesToUpload } = useFormDataStore();

  const handleClick = () => {
    inputFieldRef.current.click();
  };

  const handleSelectedFile = (event) => {
    const fileUploaded = event.target.files[0];
    addUploadFile(valueId, fileUploaded);
  };

  const handleDeleteAttachment = () => {
    removeUploadFile(valueId);
  };

  return (
    <FormControl>
      <FormLabel
        fontSize={INPUT_LABEL_TEXT_SIZE}
        fontWeight="600"
        lineHeight="14px"
        textColor={colors.codGray}
      >
        {label}
      </FormLabel>
      <Button
        style={{
          width: '100%', height: '200px', borderWidth: '1px', marginTop: '12px',
        }}
        onClick={handleClick}
      >
        <VStack>
          <Icon boxSize={10} as={FaUpload} style={{ marginBottom: 10 }} />
          <Text fontSize="14px">{label}</Text>
          <Text fontSize="12px" color={colors.bayBlue}>Max file size: 10 MB</Text>
        </VStack>
      </Button>
      <Input ref={inputFieldRef} type="file" style={{ display: 'none' }} onChange={handleSelectedFile} />
      {filesToUpload[valueId] && (
      <HStack style={{ width: '100%', marginTop: 8, height: 48 }}>
        <HStack style={{
          height: '100%',
          width: '100%',
          backgroundColor: colors.alabasterGray,
          borderRadius: 8,
          paddingLeft: 16,
          borderWidth: '1px',
        }}
        >
          <Text>{filesToUpload[valueId].name}</Text>
        </HStack>
        <Button
          style={{
            height: '100%', backgroundColor: colors.radianceBlue,
          }}
          onClick={handleDeleteAttachment}
        >
          <Icon as={FaTrash} color={colors.alabasterGray} />
        </Button>
      </HStack>
      )}
    </FormControl>
  );
};

FileUpload.propTypes = {
  label: PropTypes.string.isRequired,
  valueId: PropTypes.string.isRequired,
};

FileUpload.defaultProps = {
};

export default FileUpload;

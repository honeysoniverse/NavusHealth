import { HStack, Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { colors } from '../../../resources/colors';
import { useFormStore } from '../../../store/form';
import { useUserFormSessionStore } from '../../../store/userFormSession';
import HorizontalSeparator from '../../HorizontalSeparator/HorizontalSeparator';

const FormStepsIndicator = () => {
  const { formPages } = useFormStore();
  const { formPageIndex } = useUserFormSessionStore();

  return (
    <HStack>
      {formPages.map((page, index) => (
        <HStack key={uuidv4()}>
          <Text
            fontSize={
              {
                base: '21px', sm: '21px', md: '21px', lg: '24px', xl: '28px',
              }
            }
            margin="0px 6px"
            fontWeight="bold"
            color={formPageIndex === index ? colors.azureRadianceBlue : colors.gray}
          >
            {index + 1}
          </Text>
          {index !== (formPages.length - 1) && <HorizontalSeparator />}
        </HStack>
      ))}
    </HStack>

  );
};

FormStepsIndicator.propTypes = {
};

FormStepsIndicator.defaultProps = {
};

export default FormStepsIndicator;

import PropTypes from 'prop-types';
import { useStyleConfig, Image, HStack } from '@chakra-ui/react';

const ExtendedImage = ({
  id,
  variant,
  ...props
}) => {
  const style = useStyleConfig('Image', { variant });

  return (
    <HStack style={{
      width: '20%', alignItems: 'center', justifyContent: 'center',
    }}
    >
      <Image style={{ height: 'auto', alignItems: 'center', justifyContent: 'center' }} {...props} __css={style} />
    </HStack>

  );
};

ExtendedImage.propTypes = {
  id: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

ExtendedImage.defaultProps = {
  variant: 'logo',
};

export default ExtendedImage;

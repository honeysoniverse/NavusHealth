import PropTypes from 'prop-types';
import { useFormDataStore } from '../../../store/formData';
import CodeInput from './CodeInput';
import PhoneInputs from './PhoneInput';

const PhoneInputField = ({
  id,
  label,
  placeholder,
  valueId,
}) => {
  const { phone, phoneVerified } = useFormDataStore();
  return (
    // eslint-disable-next-line no-nested-ternary
    phone !== '' && !phoneVerified ? <CodeInput valueId={valueId} />
      : phoneVerified ? <PhoneInputs id={id} label={label} placeholder={placeholder} valueId={valueId} />
        : <PhoneInputs id={id} label={label} placeholder={placeholder} valueId={valueId} />
  );
};

PhoneInputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  valueId: PropTypes.string.isRequired,
};

PhoneInputField.defaultProps = {
};

export default PhoneInputField;

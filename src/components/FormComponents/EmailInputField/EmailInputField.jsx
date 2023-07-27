import PropTypes from 'prop-types';
import { useFormDataStore } from '../../../store/formData';
import CodeInput from './CodeInput';
import EmailInput from './EmailInput';

const Email = ({
  label,
  placeholder,
  // disabled,
}) => {
  const { email } = useFormDataStore();
  return (
    email !== '' ? <CodeInput /> : <EmailInput label={label} placeholder={placeholder} />
  );
};

Email.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  // disabled: PropTypes.bool.isRequired,
};

Email.defaultProps = {
};

export default Email;

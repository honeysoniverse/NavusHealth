import PropTypes from 'prop-types';
import React from 'react';
import Dropdown from '../../Dropdown';
import { ethnicity } from './values';

const EthnicityDropdown = ({
  label,
  placeholder,
  valueId,
}) => (
  <Dropdown
    label={label}
    placeholder={placeholder}
    values={ethnicity}
    valueId={valueId}
  />
);

EthnicityDropdown.propTypes = {
  label: PropTypes.string,
  valueId: PropTypes.string,
  placeholder: PropTypes.string,
};

EthnicityDropdown.defaultProps = {
  label: 'Ethnicity',
  valueId: 'ethnicity',
  placeholder: 'Select',
};

export default EthnicityDropdown;

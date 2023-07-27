import PropTypes from 'prop-types';
import React from 'react';
import Dropdown from '../../Dropdown';
import { countries } from './values';

const CountryDropdown = ({
  label,
  placeholder,
  valueId,
}) => (
  <Dropdown
    label={label}
    placeholder={placeholder}
    values={countries}
    valueId={valueId}
    // disabled={disabled}
  />
);

CountryDropdown.propTypes = {
  label: PropTypes.string,
  valueId: PropTypes.string,
  placeholder: PropTypes.string,
  // disabled: PropTypes.bool,
};

CountryDropdown.defaultProps = {
  label: 'State',
  valueId: 'state',
  placeholder: 'Select',
  // disabled: false,
};

export default CountryDropdown;

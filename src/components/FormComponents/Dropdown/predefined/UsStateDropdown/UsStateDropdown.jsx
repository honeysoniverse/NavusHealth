import PropTypes from 'prop-types';
import React from 'react';
import Dropdown from '../../Dropdown';
import { states } from './values';

const UsStateDropdown = ({
  label,
  placeholder,
  valueId,
}) => (
  <Dropdown
    label={label}
    placeholder={placeholder}
    values={states}
    valueId={valueId}
    isState
    // disabled={disabled}
  />
);

UsStateDropdown.propTypes = {
  label: PropTypes.string,
  valueId: PropTypes.string,
  placeholder: PropTypes.string,
  // disabled: PropTypes.bool,
};

UsStateDropdown.defaultProps = {
  label: 'State',
  valueId: 'state',
  placeholder: 'Select',
  // disabled: false,
};

export default UsStateDropdown;

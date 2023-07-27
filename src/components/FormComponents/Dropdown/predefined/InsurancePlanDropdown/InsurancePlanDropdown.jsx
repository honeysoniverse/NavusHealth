import PropTypes from 'prop-types';
import React from 'react';
import Dropdown from '../../Dropdown';
import { insurances } from './values';

const InsurancePlanDropdown = ({
  label,
  placeholder,
  valueId,
}) => (
  <Dropdown
    label={label}
    placeholder={placeholder}
    values={insurances}
    valueId={valueId}
    isInsurance
  />
);

InsurancePlanDropdown.propTypes = {
  label: PropTypes.string,
  valueId: PropTypes.string,
  placeholder: PropTypes.string,
};

InsurancePlanDropdown.defaultProps = {
  label: 'Insurance Plan',
  valueId: 'insurancePlan',
  placeholder: 'Select Insurance Plan',
};

export default InsurancePlanDropdown;

import PropTypes from 'prop-types';
import React from 'react';
import Dropdown from '../../Dropdown';
import { race } from './values';

const RaceDropdown = ({
  label,
  placeholder,
  valueId,
}) => (
  <Dropdown
    label={label}
    placeholder={placeholder}
    values={race}
    valueId={valueId}
  />
);

RaceDropdown.propTypes = {
  label: PropTypes.string,
  valueId: PropTypes.string,
  placeholder: PropTypes.string,
};

RaceDropdown.defaultProps = {
  label: 'Race',
  valueId: 'race',
  placeholder: 'Select',
};

export default RaceDropdown;

import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({
  className, type, children, disabled, ...otherProps
}) => (
  // eslint-disable-next-line react/button-has-type
  <button className={className} type={type} disabled={disabled} {...otherProps}>
    {children}
  </button>
);

CustomButton.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.string,
};

CustomButton.defaultProps = {
  className: 'primary',
  type: 'submit',
  children: 'Submit Button',
};

export default CustomButton;


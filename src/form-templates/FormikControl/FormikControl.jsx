import React from 'react';

import Input from '../FormControl/Input/Input';
import TextArea from '../FormControl/TextArea/TextArea';
import Select from '../FormControl/Select/Select';
import RadioButton from '../FormControl/RadioButton/RadioButton';
import CheckBox from '../FormControl/CheckBox/CheckBox';

const FormikControl = ({ control, ...otherProps }) => {
  switch (control) {
    case 'input':
      return <Input {...otherProps} />;
    case 'textarea':
      return <TextArea {...otherProps} />;
    case 'select':
      return <Select {...otherProps} />;
    case 'radio':
      return <RadioButton {...otherProps} />;
    case 'checkbox':
      return <CheckBox {...otherProps} />;
    default:
      return null;
  }
};

export default FormikControl;

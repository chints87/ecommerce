import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './RadioButton.module.css';

import InputError from '../../InputError/InputError';

const RadioButton = ({
  label, name, options, ...otherProps
}) => (
  <div>
    {label
      ? (
        <label className={styles.formInputLabel} htmlFor={name}>
          {label}
        </label>
      )
      : null}
    <Field name={name} {...otherProps}>
      { ({ field }) => options.map((option) => (
        <React.Fragment key={option.key}>
          <input
            type="radio"
            id={option.value}
            {...field}
            value={option.value}
            checked={field.value === option.value}

          />
          <label htmlFor={option.value}>{option.key}</label>
        </React.Fragment>
      ))}
    </Field>
    <ErrorMessage name={name} component={InputError} />
  </div>
);

export default RadioButton;

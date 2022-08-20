import React from 'react';
import { Field, ErrorMessage } from 'formik';
import InputError from '../../InputError/InputError';

import styles from './Select.module.css';

const Select = ({
  label, name, options, ...otherProps
}) => (
  <div className={styles.input}>
    {label
      ? (
        <label className={styles.formInputLabel} htmlFor={name}>
          {label}
        </label>
      )
      : null}
    <Field as="select" className={styles.formInput} id={name} name={name} {...otherProps}>
      { options.map((option) => (
        <option
          className={styles.option}
          key={option.value}
          value={option.value}
        >
          {option.key}
        </option>
      ))}

    </Field>
    <ErrorMessage name={name} component={InputError} />
  </div>
);

export default Select;

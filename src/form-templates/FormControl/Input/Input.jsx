import React from 'react';
import { Field, ErrorMessage } from 'formik';
import InputError from '../../InputError/InputError';

import styles from './Input.module.css';

const Input = ({ label, name, ...otherProps }) => (
  <div className={styles.input}>
    {label
      ? (
        <label className={styles.formInputLabel} htmlFor={name}>
          {label}
        </label>
      )
      : null}
    <Field className={styles.formInput} id={name} name={name} {...otherProps} />
    <ErrorMessage name={name} component={InputError} />
  </div>
);

export default Input;

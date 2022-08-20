import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './CheckBox.module.css';

import InputError from '../../InputError/InputError';

const CheckBox = ({
  label, name, options, ...otherProps
}) => (
  <div className={styles.checkbox}>
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
            type="checkbox"
            id={option.value}
            {...field}
            value={option.value}
            checked={field.value.includes(option.value)}

          />
          <label htmlFor={option.value}>{option.key}</label>
        </React.Fragment>
      ))}
    </Field>
    <ErrorMessage name={name} component={InputError} />
  </div>
);

export default CheckBox;

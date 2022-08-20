import React from 'react';
import { Field, ErrorMessage } from 'formik';
import InputError from '../../InputError/InputError';

import styles from './TextArea.module.css';

const TextArea = ({
  label, name, designClassInputLabel, designClassInput, ...otherProps
}) => (
  <div className={designClassInput ? styles[designClassInput] : styles.input}>
    {label
      ? (
        <label
          className={designClassInputLabel
            ? styles[designClassInputLabel] : styles.formInputLabel}
          htmlFor={name}
        >
          {label}
        </label>
      )
      : null}
    <Field as="textarea" className={styles.formTextArea} id={name} name={name} {...otherProps} />
    <ErrorMessage name={name} component={InputError} />
  </div>
);

export default TextArea;

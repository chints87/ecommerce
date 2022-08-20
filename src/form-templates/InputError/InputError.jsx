import React from 'react';

import styles from './InputError.module.css';

const InputError = ({ children }) => (
  <div className={styles.inputError}>
    {children}
  </div>
);

export default InputError;

import React from 'react';

import styles from './SignInSignUp.module.css';

import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import SignIn from '../../components/Forms/SignIn/SignIn';
import SignUp from '../../components/Forms/SignUp/SignUp';

const signInSignUp = () => (
  <div className={styles.signInSignUp}>
    <BreadCrumbs
      firstTab={<SignUp />}
      secondTab={<SignIn />}
    />
  </div>

);

export default signInSignUp;

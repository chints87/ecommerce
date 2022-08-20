import React, { useState } from 'react';

import styles from './BreadCrumbs.module.css';


import SignIn from '../Forms/SignIn/SignIn';
import SignUp from '../Forms/SignUp/SignUp';

const BreadCrumbs = () => {
  const [activeTab, setActiveTab] = useState(false);

  const firstTabHandler = () => {
    setActiveTab(true);
  };

  const secondTabHandler = () => {
    setActiveTab(false);
  };

  return (
    <div className={styles.breadCrumbs}>
      <div className={styles.tabs}>
        <div
          className={activeTab ? styles.activeHeading
            : styles.inActiveHeading}
          onClick={() => firstTabHandler()}
        >
          Sign In
        </div>
        <div
          className={activeTab ? styles.inActiveHeading
            : styles.activeHeading}
          onClick={() => secondTabHandler()}
        >
          Sign Up
        </div>
      </div>
      <div className={styles.activeTab}>
        {activeTab ? <SignIn signInTabHandler={secondTabHandler} />
          : <SignUp />}
      </div>
    </div>
  );
};

export default BreadCrumbs;

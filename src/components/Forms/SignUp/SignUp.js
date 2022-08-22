import React from 'react';
import { Formik, Form } from 'formik';
import { registerUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../../utilities/firebase/firebase';
import * as Yup from 'yup';

import styles from './SignUp.module.scss';

import FormikControl from '../../../form-templates/FormikControl/FormikControl'
import CustomButton from '../../CustomButton/CustomButton'

const SignUp = () => {

  const initialValues = {
    displayName:'',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const validationRules = Yup.object({
    displayName: Yup.string().required('Required'),  
    email: Yup.string()
      .email('Email format is invalid')
      .required('Required'),
    password: Yup.string()
      .required('Required')
      .min(8, 'Minimum of 8 characters')
      .matches(/(?=.*[a-z])/, 'Must contain a lowercase letter')
      .matches(/(?=.*[A-Z])/, 'Must contain a uppercase letter')
      .matches(/(?=.*[0-9])/, 'Must contain a number'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords do not match')
        .required('Required'),
  });

 

  const onSubmit = async(values, onSubmitProps) => {   
    const {displayName, email, password } = values;
    try {
      const {user} = await registerUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user,{displayName});
    } catch (error) {
      console.log(error);
    }  
    
    onSubmitProps.resetForm();
  };

  return (
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationRules}
        // validateOnMount={true}
        validateOnChange={true}
      >
        {(formik) => {
          console.log(formik);
          return (
            <Form className={styles.inquiryForm}>
               <FormikControl
                control="input"
                type="text"
                label="Name"
                name="displayName"
              /> 
              <FormikControl
                control="input"
                type="email"
                label="email"
                name="email"
              />
              <FormikControl
                control="input"
                type="password"
                label="Password"
                name="password"
              />
              <FormikControl
                control="input"
                type="password"
                label="Confirm Password"
                name="confirmPassword"
              />     

              <CustomButton
                type="submit"
                className="primaryNotLink"
                disabled={!formik.isValid}
              >
                Sign Up
              </CustomButton>

            </Form>
          );
        }}
      </Formik>
  );
};

export default SignUp
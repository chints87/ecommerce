import {useContext} from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import styles from './SignIn.module.scss';

import FormikControl from '../../../form-templates/FormikControl/FormikControl'
import CustomButton from '../../CustomButton/CustomButton'
import { signInWithGooglePopup ,createUserDocumentFromAuth, logInWithEmailAndPassword } from '../../../utilities/firebase/firebase'
import { UserContext } from '../../../context/user';

const SignIn = () => {

  const initialValues = {
    email: '',
    password: '',
  };

  const validationRules = Yup.object({
    email: Yup.string()
      .email('Email format is invalid')
      .required('Required'),
    password: Yup.string()
      .required('Required')
      .min(8, 'Minimum of 8 characters')
      .matches(/(?=.*[a-z])/, 'Must contain a lowercase letter')
      .matches(/(?=.*[A-Z])/, 'Must contain a uppercase letter')
      .matches(/(?=.*[0-9])/, 'Must contain a number')
  });

  const { setCurrentUser } = useContext(UserContext);

  const onSubmit = async (values) => {
    const { email, password } = values;
    try {
      const {user} = await logInWithEmailAndPassword(email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithGoogle = async() => {
    const { user } = await signInWithGooglePopup();  
    const userDocRef = await createUserDocumentFromAuth(user)
    setCurrentUser(user);
  }


  return (
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationRules}
        validateOnMount
        validateOnChange={false}
      >
        {(formik) => {
          console.log(formik);
          return (
            <Form className={styles.inquiryForm}>
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

              <CustomButton
                type="submit"
                className="primaryNotLink"
              >
                SignIn
              </CustomButton>
              <CustomButton className='btn' type="button" onClick={signInWithGoogle}>Sign In with google</CustomButton>

            </Form>
          );
        }}
      </Formik>
  );
};

export default SignIn
import * as Yup from 'yup';

const validationRules = Yup.object({
  firstName: Yup.string().required('Required'),  
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

export default validationRules;

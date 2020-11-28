import * as yup from 'yup';

const schema = () =>
  yup.object({
    username: yup
      .string()
      .required('This username is required')
      .min(1, 'The password is too short')
      .max(150, 'The username is too long'),
    password: yup
      .string()
      .required('This field is required')
      .min(1, 'The password is too short')
      .max(128, 'The password is too long')
      .matches(/^(?=.*[A-Z])(?=.*\d).{8,}$/, 'Is not in correct format'),
    passwordRepeat: yup
      .string()
      .required('This field is required')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
    is_active: yup.boolean().oneOf([true], 'The terms and conditions must be accepted.'),
  });

export default schema;

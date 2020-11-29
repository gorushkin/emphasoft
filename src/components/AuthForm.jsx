import React from 'react';
import { asyncActions } from '../slices';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

const schema = () =>
  yup.object({
    username: yup.string().required('This field is required'),
    password: yup.string().required('This field is required'),
  });

const AuthForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validateOnChange: false,
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(asyncActions.userLogin(values))
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='form-group'>
        <label htmlFor='exampleInputEmail1'>Login</label>
        <input
          type='text'
          className='form-control'
          onChange={formik.handleChange}
          value={formik.values.username}
          name='username'
        />
        {formik.errors.username ? (
          <div className='d-block mb-2 invalid-feedback'>{formik.errors.username}</div>
        ) : null}
      </div>
      <div className='form-group'>
        <label htmlFor='exampleInputPassword1'>Password</label>
        <input
          onChange={formik.handleChange}
          type='password'
          className='form-control'
          name='password'
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div className='d-block mb-2 invalid-feedback'>{formik.errors.password}</div>
        ) : null}
      </div>
      <button className='btn btn-primary mr-3'>Sign In</button>
    </form>
  );
};
export default AuthForm;

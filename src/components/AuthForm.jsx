import React, { useState } from 'react';
import { asyncActions } from '../slices';
import { useDispatch } from 'react-redux';


const AuthForm = () => {
  const [form, setForm] = useState({ username: 'test_super', password: 'Nf<U4f<rDbtDxAPn' });
  const dispatch = useDispatch();

  const signInHandler = (e) => {
    e.preventDefault();
    dispatch(asyncActions.userLogin(form))
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form>
      <div className='form-group'>
        <label htmlFor='exampleInputEmail1'>Login</label>
        <input
          type='text'
          className='form-control'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
          onChange={onChangeHandler}
          value={form.login}
          name='username'
        />
        <small id='emailHelp' className='form-text text-muted'>
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className='form-group'>
        <label htmlFor='exampleInputPassword1'>Password</label>
        <input
          onChange={onChangeHandler}
          type='password'
          className='form-control'
          id='exampleInputPassword1'
          name='password'
          value={form.password}
        />
      </div>
      <button className='btn btn-primary mr-3' onClick={signInHandler}>
        Sign In
      </button>
    </form>
  );
};
export default AuthForm;

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import Alert from '../components/Alert';

const AuthPage = () => {
  const { user } = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    if (!user.isGuest) {
      history.push('/users');
    }
  });

  return (
    <div className='container'>
      <Alert />
      <AuthForm />
    </div>
  );
};
export default AuthPage;

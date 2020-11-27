import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

const AuthPage = () =>{
  const { user } = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    if (!user.isGuest) {
      history.push('/users');
    }
  });

  return <AuthForm />
};
export default AuthPage;

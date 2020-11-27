import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddNewUserButton from '../components/AddNewUserButton';
import UserList from '../components/UserList';
import { asyncActions } from '../slices';

const AuthForm = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(asyncActions.getUsers());
  }, []);

  return (
    <div className='container'>
      <h1>Список пользователей</h1>
      <AddNewUserButton/>
      <UserList />
    </div>
  );
};
export default AuthForm;

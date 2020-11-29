import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FilterUserForm from '../components/FilterUser';
import AddNewUserButton from '../components/AddNewUserButton';
import UserList from '../components/UserList';
import { asyncActions } from '../slices';
import getModals from '../components/modals';
import Alert from '../components/Alert';

const renderModal = (type) => {
  if (!type) {
    return null;
  }
  const Component = getModals(type);
  return <Component />;
};

const AuthForm = () => {
  const dispatch = useDispatch();
  const { type } = useSelector((state) => state.modals);

  useEffect(() => {
    dispatch(asyncActions.getUsers());
  }, []);

  return (
    <div className='container'>
      <Alert />
      <h1>Список пользователей</h1>
      <div className='adduserbtn row d-flex justify-content-between'>
        <FilterUserForm />
        <AddNewUserButton />
      </div>
      {renderModal(type)}
      <UserList />
    </div>
  );
};
export default AuthForm;

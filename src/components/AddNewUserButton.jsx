import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../slices';

const CreateUserForm = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(actions.showModal({ type: 'add' }));
  };

  return (
    <button onClick={clickHandler} type='submit' className='btn btn-lg btn-primary px-sm-5'>
      Add newuser
    </button>
  );
};

export default CreateUserForm;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../slices';

const CreateUserForm = () => {
  const { modals } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const clickHandler = () => {
    console.log('oprn form');
  };

  return (
    <div className='row d-flex justify-content-end mb-3'>
      <button onClick={clickHandler} type='submit' className='btn btn-lg btn-primary px-sm-5'>
        Add newuser
      </button>
    </div>
  );
};

export default CreateUserForm;

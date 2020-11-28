import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../slices';

const Alert = () => {
  const { error, type } = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(actions.hideAlert());
  };

  return (
    error && (
      <div className={`alert alert-${type}`} role='alert'>
        {error}
        <button
          onClick={closeHandler}
          type='button'
          className='close'
          data-dismiss='alert'
          aria-label='Close'
        >
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
    )
  );
};

export default Alert;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../slices';

const FilterUserForm = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.users);
  const [value, setValue] = useState(filter);

  const resetHandler = () => {
    dispatch(actions.filterUser(''))
    setValue('');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(actions.filterUser(value));
  };

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className='d-block mb-3 input-group' onSubmit={submitHandler}>
      <div className='input-group'>
        <input
          type='text'
          className='form-control'
          placeholder='Username'
          value={value}
          aria-label='control'
          aria-describedby='basic-addon2'
          onChange={changeHandler}
        />
        <div className='input-group-append'>
          <button onClick={submitHandler} className='btn btn-outline-secondary' type='button'>
            Filter
          </button>
          <button onClick={resetHandler} className='btn btn-outline-secondary' type='button'>
            Reset Filter
          </button>
        </div>
      </div>
    </form>
  );
};

export default FilterUserForm;

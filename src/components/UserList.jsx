import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../slices';
import { createSelector } from '@reduxjs/toolkit';

const User = (user, actionHandler) => {
  return (
    <tr key={user.id}>
      <td className='item__id'>{user.id}</td>
      <td className='item__username'>{user.username}</td>
      <td className='item__name'>{user.first_name}</td>
      <td className='item__name'>{user.last_name}</td>
      <td className='item__btn'>
        <span onClick={() => actionHandler(user, 'edit')} className='badge badge-warning'>
          edit
        </span>
      </td>
      <td className='item__btn'>
        <span onClick={() => actionHandler(user, 'remove')} className='badge badge-danger'>
          remove
        </span>
      </td>
    </tr>
  );
};


const sortMapping = {
  username: (x) => x.username.toLowerCase(),
  id: (x) => x.id,
};

const sort = (type) => (direction) => (a, b) => {
  const [x, y] = direction ? [a, b] : [b, a];
  if (sortMapping[type](x) < sortMapping[type](y)) {
    return -1;
  }
  return 1;
};

const currentUserList = createSelector(
  (state) => state.users.users,
  (state) => state.users.sortUp,
  (state) => state.users.sortBy,
  (users, sortUp, sortBy) => {
    if (!sortBy) return users;
    return [...users].sort(sort(sortBy)(sortUp));
  }
);

const UserList = () => {
  const users = useSelector(currentUserList);
  const dispatch = useDispatch();

  const clickHandler = (sortBy) => (e) => {
    e.preventDefault();
    dispatch(actions.setSortBy(sortBy));
  };

  const actionHandler = (data, action) => {
    dispatch(actions.showModal({ type: action, data }));
  };

  return (
    <div className='row'>
      <table className='col table table-striped table-hover table-responsive-md'>
        <thead className='table-primary'>
          <tr>
            <th className='sort' scope='col'>
              <a onClick={clickHandler('id')} href='#'>
                Id
              </a>
            </th>
            <th className='sort' scope='col'>
              <a onClick={clickHandler('username')} href='#'>
                Username
              </a>
            </th>
            <th scope='col'>
              <span>First name</span>
            </th>
            <th scope='col'>
              <span>Last name</span>
            </th>
            <th scope='col'></th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>{users.map((user) => User(user, actionHandler))}</tbody>
      </table>
    </div>
  );
};
export default UserList;

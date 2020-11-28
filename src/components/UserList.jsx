import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../slices';

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

const UserList = () => {
  const { users } = useSelector((state) => state.users);
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

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {actions} from '../slices';


const User = (user) => {
  return (
    <tr key={user.id}>
      <td className='item__id'>{user.id}</td>
      <td className='item__username'>{user.username}</td>
      <td className='item__name'>{user.first_name}</td>
      <td className='item__name'>{user.last_name}</td>
    </tr>
  );
};

const UserList = () => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const clickHandler = (sortBy) => (e) => {
    e.preventDefault();
    dispatch(actions.setSortBy(sortBy))
  }

  return (
    <div className='row'>
      <table className='col table table-striped table-hover table-responsive-md'>
        <thead className='table-primary'>
          <tr>
            <th className='sort' scope='col'>
              <a onClick={clickHandler('id')} href='#'>Id</a>
            </th>
            <th className='sort'  scope='col'>
              <a onClick={clickHandler('username')} href='#'>Username</a>
            </th>
            <th scope='col'>
              <span>First name</span>
            </th>
            <th scope='col'>
              <span>Last name</span>
            </th>
          </tr>
        </thead>
        <tbody>{users.map((user) => User(user))}</tbody>
      </table>
    </div>
  );
};
export default UserList;

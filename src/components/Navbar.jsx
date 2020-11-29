import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../slices';

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(actions.userLogout());
    history.push('/');
  };

  return (
    <nav className='navbar-expand-lg d-flex navbar navbar-dark bg-primary justify-content-between'>
      <span className='navbar-brand text-white'>Emphasoft</span>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            {user.isGuest ? (
              <Link to='/' className='nav-link'>
                LogIn
              </Link>
            ) : (
              <Link onClick={logoutHandler} className='nav-link' to='/auth'>
                Logout
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

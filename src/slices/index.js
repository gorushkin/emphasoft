import { combineReducers } from '@reduxjs/toolkit';
import user, { actions as userActions, asyncActions as userAsyncActions } from './user';
// import modals, { actions as modalActions } from './modal';
import users, { actions as usersActions, asyncActions as usersAsyncActions } from './users';

export default combineReducers({ user, users });

const actions = { ...userActions, ...usersActions };
const asyncActions = { ...userAsyncActions, ...usersAsyncActions };

export { actions, asyncActions };

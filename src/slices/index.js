import { combineReducers } from '@reduxjs/toolkit';
import user, { actions as userActions, asyncActions as userAsyncActions } from './user';
import modals, { actions as modalActions } from './modal';
import users, { actions as usersActions, asyncActions as usersAsyncActions } from './users';
import error, { actions as errorActions } from './error';

export default combineReducers({ user, error, users, modals });

const actions = { ...userActions, ...errorActions, ...usersActions, ...modalActions };
const asyncActions = { ...userAsyncActions, ...usersAsyncActions };

export { actions, asyncActions };

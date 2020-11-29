import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';
import { actions as errorActions } from './error';

const getUsers = createAsyncThunk('users/getUsers', async (rejectWithValue, dispatch) => {
  const url = routes.users();
  try {
    const token = `Token ${localStorage.getItem('token')}`;
    const response = await axios.get(url, { headers: { Authorization: token } });
    return response.data;
  } catch (error) {
    console.log(error.response.data.non_field_errors.join(''));
    const errorMsg = Object.values(error.response.data).join('') || error.message || 'Oops!!!';
    dispatch(errorActions.showAlert({ error: errorMsg, type: 'danger' }));
    return rejectWithValue();
  }
});

const addUser = createAsyncThunk(
  'users/addUser',
  async (
    { username, first_name, last_name, password, is_active },
    { rejectWithValue, dispatch }
  ) => {
    const url = routes.users();
    try {
      const token = `Token ${localStorage.getItem('token')}`;
      const response = await axios.post(
        url,
        { username, first_name, last_name, password, is_active },
        { headers: { Authorization: token } }
      );
      return response.data;
    } catch (error) {
      const errorMsg = Object.values(error.response.data).join('') || error.message || 'Oops!!!';
      dispatch(errorActions.showAlert({ error: errorMsg, type: 'danger' }));
      return rejectWithValue();
    }
  }
);

const removeUser = createAsyncThunk(
  'users/removeUser',
  async ({ id }, { rejectWithValue, dispatch }) => {
    const url = routes.user(id);
    try {
      const token = `Token ${localStorage.getItem('token')}`;
      await axios.delete(url, { headers: { Authorization: token } });
      return id;
    } catch (error) {
      const errorMsg = Object.values(error.response.data).join('') || error.message || 'Oops!!!';
      dispatch(errorActions.showAlert({ error: errorMsg, type: 'danger' }));
      return rejectWithValue();
    }
  }
);

const editUser = createAsyncThunk(
  'users/editUser',
  async ({ id, username, first_name, last_name, password }, { rejectWithValue, dispatch }) => {
    const url = routes.user(id);
    try {
      const token = `Token ${localStorage.getItem('token')}`;
      const response = await axios.patch(
        url,
        { username, first_name, last_name, password },
        { headers: { Authorization: token } }
      );
      return response.data;
    } catch (error) {
      const errorMsg = Object.values(error.response.data).join('') || error.message || 'Oops!!!';
      dispatch(errorActions.showAlert({ error: errorMsg, type: 'danger' }));
      return rejectWithValue();
    }
  }
);


const slice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    sortUp: true,
    sortBy: null,
  },
  reducers: {
    setSortBy(state, { payload }) {
      if (state.sortBy !== payload) {
        state.sortBy = payload;
        state.sortUp = true;
      } else {
        state.sortUp = !state.sortUp;
      }
    },
  },
  extraReducers: {
    [getUsers.fulfilled]: (state, { payload }) => {
      state.users = payload;
    },
    [addUser.fulfilled]: (state, { payload }) => {
      state.users.push(payload);
    },
    [removeUser.fulfilled]: (state, { payload }) => {
      state.users = state.users.filter((item) => item.id !== payload);
    },
    [editUser.fulfilled]: (state, { payload }) => {
      state.users = state.users.map((item) => {
        if (item.id !== payload.id) return item;
        return payload;
      });
    },
    [addUser.rejected]: (state, action) => {
      return state;
    },
    [editUser.rejected]: (state, action) => {
      return state;
    },
  },
});

const actions = { ...slice.actions };
const asyncActions = { getUsers, addUser, editUser, removeUser };
export { actions, asyncActions };
export default slice.reducer;

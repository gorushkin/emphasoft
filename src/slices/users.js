import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';

const getUsers = createAsyncThunk('users/getUsers', async () => {
  const url = routes.users();
  try {
    const token = `Token ${localStorage.getItem('token')}`;
    const response = await axios.get(url, { headers: { Authorization: token } });
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error.response.data.non_field_errors.join(''));
  }
});

const addUser = createAsyncThunk(
  'users/addUser',
  async ({ username, first_name, last_name, password, is_active }) => {
    const url = routes.users();
    try {
      const token = `Token ${localStorage.getItem('token')}`;
      const response = await axios.post(
        url,
        { username, first_name, last_name, password, is_active },
        { headers: { Authorization: token } }
      );
      const user = response.data;
      return user;
    } catch (error) {
      console.log(error.response.data.non_field_errors.join(''));
    }
  }
);

const sortMatch = {
  username: (a, b) => {
    if (a.username.toLowerCase() < b.username.toLowerCase()) {
      return -1;
    }
    return 1;
  },
  id: (a, b) => {
    if (a.id < b.id) {
      return -1;
    }
    return 1;
  },
};

const slice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    sortDirections: 'up',
  },
  reducers: {
    setSortBy(state, { payload }) {
      state.sortBy = payload;
      state.users = state.users.sort(sortMatch[payload]);
    },

  },
  extraReducers: {
    [getUsers.fulfilled]: (state, { payload }) => {
      state.users = payload;
    },
    [addUser.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.users.push(payload)
    },
  },
});

const actions = { ...slice.actions };
const asyncActions = { getUsers, addUser };
export { actions, asyncActions };
export default slice.reducer;

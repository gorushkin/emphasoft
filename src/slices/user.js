import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';

const userLogin = createAsyncThunk('user/login', async ({ username, password }) => {
  const url = routes.login();
  try {
    const response = await axios.post(url, { username, password });
    const {
      data: { token },
    } = response;
    localStorage.setItem('token', token);
    return { isGuest: false };
  } catch (error) {
    console.log(error.response.data.non_field_errors.join(''));
  }
});

const slice = createSlice({
  name: 'user',
  initialState: {
    user: { isGuest: true },
  },
  reducers: {
    userInit(state, {payload}) {
      state.user = payload;
    },
  },
  extraReducers: {
    [userLogin.fulfilled]: (state, {payload}) => {
      state.user = payload;
    },
  },
});

const actions = { ...slice.actions };
const asyncActions = { userLogin };
export { actions, asyncActions };
export default slice.reducer;

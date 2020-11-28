import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';
import { actions as errorActions } from './error';

const userLogin = createAsyncThunk(
  'user/login',
  async ({ username, password }, { rejectWithValue, dispatch }) => {
    const url = routes.login();
    try {
      const response = await axios.post(url, { username, password });
      const {
        data: { token },
      } = response;
      localStorage.setItem('token', token);
      return { isGuest: false };
    } catch (error) {
      const errorMsg = Object.values(error.response.data).join('') || error.message || 'Oops!!!';
      dispatch(errorActions.showAlert({ error: errorMsg, type: 'danger' }));
      return rejectWithValue();
    }
  }
);

const slice = createSlice({
  name: 'user',
  initialState: {
    user: { isGuest: true },
  },
  reducers: {
    userInit(state, { payload }) {
      state.user = payload;
    },
  },
  extraReducers: {
    [userLogin.fulfilled]: (state, { payload }) => {
      state.user = payload;
    },
    [userLogin.rejected]: (state) => {
      state.user = { isGuest: true };
    },
  },
});

const actions = { ...slice.actions };
const asyncActions = { userLogin };
export { actions, asyncActions };
export default slice.reducer;

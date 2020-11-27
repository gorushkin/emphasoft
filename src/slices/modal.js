import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Modal } from 'bootstrap';

const slice = createSlice({
  name: Modal,
  initialState: {
    currentModalName: null,
    show: false,
  },
  reducers: {
    changeState(state, action) {
      console.log(action);
    }
  },
});

const actions = { ...slice.actions };
export { actions };
export default slice.reducer;

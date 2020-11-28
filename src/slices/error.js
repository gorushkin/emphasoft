import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'error',
  initialState: {
    error: null,
    type: null,
  },
  reducers: {
    showAlert(state, { payload: { error, type } }) {
      state.error = error;
      state.type = type;
    },
    hideAlert(state) {
      state.error = null;
      state.type = null;
    },
  },
});

const actions = { ...slice.actions };

export default slice.reducer;
export { actions };

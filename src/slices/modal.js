import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'modals',
  initialState: {
    type: null,
  },
  reducers: {
    showModal(state, { payload }) {
      state.type = payload;
    },
    hideModal(state) {
      state.type = null;
    },
  },
});

const actions = { ...slice.actions };
export { actions };
export default slice.reducer;

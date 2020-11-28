import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'modals',
  initialState: {
    type: null,
    data: null,
  },
  reducers: {
    showModal(state, { payload: { type, data } }) {
      state.type = type;
      if (data) {
        state.data = data;
      }
    },
    hideModal(state) {
      state.type = null;
    },
  },
});

const actions = { ...slice.actions };
export { actions };
export default slice.reducer;

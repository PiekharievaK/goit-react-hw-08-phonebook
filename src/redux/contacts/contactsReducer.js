import { createSlice } from '@reduxjs/toolkit';

const filter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changesFilter: (_, action) => action.payload,
  },
});

export const { changesFilter } = filter.actions;
export default filter.reducer;
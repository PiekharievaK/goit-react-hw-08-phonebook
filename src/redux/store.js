import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { api } from 'contactsAPI/contactsAPI';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const initialState = {
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    filter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    contacts: contactsSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

export const { filter } = contactsSlice.actions;

setupListeners(store.dispatch);

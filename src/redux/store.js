import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { api } from 'contactsAPI/contactsAPI';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { useGetContactsQuery } from 'contactsAPI/contactsAPI';
const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['token', 'isLoggedIn']
}



const initialState = {
  filter: '',
  token: '',
  user: { name: '', email: '' },
  isLoggedIn: false,
  isFatchingUser: false,
};
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  api.middleware]


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    filter(state, action) {
      state.filter = action.payload;
    },
    userToken(state, action) {
      state.token = action.payload;
    },
    currentUser(state, action) {
      state.user = action.payload;
    },
    isLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

const persistedContacts = persistReducer(persistConfig, contactsSlice.reducer )
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    contacts: persistedContacts,
  },
  middleware,})

export const persistor = persistStore(store);

export const { filter, userToken, isLoggedIn, currentUser } =
  contactsSlice.actions;

setupListeners(store.dispatch);

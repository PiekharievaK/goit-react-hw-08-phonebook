import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//  Basse https://connections-api.herokuapp.com

export const api = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().contacts.token;
      
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    signUpUser: builder.mutation({
      query: data => ({
        url: '/users/signup',
        method: 'POST',
        body: data,
      }),
    }),
    logInUser: builder.mutation({
      query: data => ({
        url: '/users/login',
        method: 'POST',
        body: data,
      }),
    }),
    logOutUser: builder.mutation({
      query: data => ({
        url: '/users/logout',
        method: 'POST',
        body: data,
      }),
    }),

    getCurrentUser: builder.query({
      query: () => ({
        url: '/users/current',
      }),
    }),
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    addContacts: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContacts: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactsMutation,
  useDeleteContactsMutation,
  useSignUpUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useGetCurrentUserQuery,
} = api;

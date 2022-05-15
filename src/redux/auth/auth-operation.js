import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const authApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://connections-api.herokuapp.com',
      prepareHeaders: (headers, { getState }) => {
        const token = getState().contacts.token
    // console.log(getState());
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
          headers.set('authorization', `Bearer ${token}`)
        }
    
        return headers
      },
    }),
    tagTypes: ['Contacts'],
    endpoints: builder => ({
  
      signUpUser: builder.mutation({
        query: data => ({
          url:'/users/signup',
        method: 'POST',
        body: data})
        
       
      }),
      logInUser: builder.mutation({
        query: data => ({
          url:'/users/login',
        method: 'POST',
        body: data})
        
       
      }),
      logOutUser: builder.mutation({
        query: data => ({
          url:'/users/logout',
        method: 'POST',
        body: data})
        
       
      }),
    }),
  });
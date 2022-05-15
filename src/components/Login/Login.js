import { useState, useEffect } from 'react';
import {
  useLogInUserMutation,
 
  useGetCurrentUserQuery,
} from 'contactsAPI/contactsAPI';
import { useSelector, useDispatch } from 'react-redux';
import { userToken, isLoggedIn, currentUser } from 'redux/store';

export const Login = params => {
  const dispatch = useDispatch();
  // const actualToken = useSelector(state => state.contacts.token)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginUser] = useLogInUserMutation('');

  const {data} = useGetCurrentUserQuery()
  const handleSubmit = async e => {
      e.preventDefault();
      console.log('data',data);
    //   dispatch(currentUser(data));
      await loginUser({ email: email, password: password }).then(res => {
          dispatch(userToken(res.data.token));
          dispatch(isLoggedIn(true));
        //   console.log('sss',data);
        });
    };
 

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          value={email}
          type="text"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          name="password"
          value={password}
          type="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
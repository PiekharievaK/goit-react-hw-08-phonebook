import { useState } from 'react';
import { useLogInUserMutation } from 'contactsAPI/contactsAPI';
import { useDispatch, useSelector } from 'react-redux';
import { userToken, isLoggedIn, currentUser } from 'redux/store';

export const Login = params => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.contacts.user)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginUser] = useLogInUserMutation('');

  const handleSubmit = async e => {
    e.preventDefault();

    await loginUser({ email: email, password: password }).then(res => {
      dispatch(userToken(res.data.token));
      dispatch(currentUser(user.name))
      dispatch(isLoggedIn(true));
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

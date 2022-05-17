import { useState } from 'react';
import operations from 'redux/auth/authOperation';
import { useDispatch } from 'react-redux';

export const LoginForm = params => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('json@mail.ru');
  const [password, setPassword] = useState('json123');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(operations.logInUser({ email: email, password: password }));
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

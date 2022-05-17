import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/authOperation';

export default function Registration(params) {
  // json, json@mail.ru, json123
  const dispatch = useDispatch()
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit =  e => {
    e.preventDefault();
     dispatch(operations.signUpUser({ name: login, email: email, password: password }));
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'login':
        return setLogin(value);
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
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="login"
          type="text"
          value={login}
          placeholder="login"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          value={email}
          placeholder="email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          value={password}
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

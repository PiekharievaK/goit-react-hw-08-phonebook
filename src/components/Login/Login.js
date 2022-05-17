import { useState } from 'react';
import operations from 'redux/auth/authOperation';
import { useDispatch } from 'react-redux';
import s from './Login.module.css'

export const LoginForm = params => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
     
      <form onSubmit={handleSubmit} className={s.form} >
        <input
          name="email"
          value={email}
          type="text"
          className={s.input}
          placeholder="email"
          onChange={handleChange}
        />
        <input
          name="password"
          value={password}
          type="password"
          className={s.input}
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit" className={s.button}>Submit</button>
      </form>
    </>
  );
};

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/authOperation';
import s from './Registration.module.css'
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
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          name="login"
          type="text"
          className={s.input}
          value={login}
          placeholder="login"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          className={s.input}
          value={email}
          placeholder="email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          className={s.input}
          value={password}
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit" className={s.button}>Submit</button>
      </form>
    </>
  );
}

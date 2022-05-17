import operations from 'redux/auth/authOperation';
import { useSelector, useDispatch } from 'react-redux';
import s from './Header.module.css'

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const logOut = () => {
    dispatch(operations.logOut());
  };

  return isLoggedIn ? (
    <div className={s.userMenu}>
      <h2 className={s.userMenuTitle}>
        Hello,
        <>{user.name}</>
      </h2>
      <button onClick={logOut} className={s.button} > Log Out</button>
    </div>
  ) : (
    <h2 className={s.userMenuTitle}>Please register or login</h2>
  );
};

export default UserMenu;

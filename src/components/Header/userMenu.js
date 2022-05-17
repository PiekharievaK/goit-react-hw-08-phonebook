import operations from 'redux/auth/authOperation';
import { useSelector, useDispatch } from 'react-redux';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const logOut = () => {
    dispatch(operations.logOut());
  };

  return isLoggedIn ? (
    <>
      <h2>
        Hello,
        <>{user.name}</>
      </h2>
      <button onClick={logOut}> Log Out</button>
    </>
  ) : (
    <h2>Please register or login</h2>
  );
};

export default UserMenu;

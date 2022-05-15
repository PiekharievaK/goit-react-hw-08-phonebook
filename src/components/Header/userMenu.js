import { useLogOutUserMutation } from 'contactsAPI/contactsAPI';
import { useSelector, useDispatch } from 'react-redux';
import { isLoggedIn, userToken } from 'redux/store';

const UserMenu = param => {
  const dispatch = useDispatch();
  const [logOutUser] = useLogOutUserMutation();
  const token = useSelector(state => state.contacts.token);
  const isLoggIn = useSelector(state => state.contacts.isLoggedIn);

  const logOut = async token => {
    await logOutUser(token);
    dispatch(userToken(''));
  };

  return isLoggIn ? (
    <>
      <h2>Hello</h2>
      <button
        onClick={() => {
          logOut(token);
          dispatch(isLoggedIn(false));
        }}
      >
        {' '}
        Log Out
      </button>
    </>
  ) : (
    <h2>login</h2>
  );
};

export default UserMenu;

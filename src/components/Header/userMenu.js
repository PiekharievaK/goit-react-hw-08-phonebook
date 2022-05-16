import { useLogOutUserMutation } from 'contactsAPI/contactsAPI';
import { useSelector, useDispatch } from 'react-redux';
import { currentUser, isLoggedIn, userToken } from 'redux/store';

const UserMenu = () => {
  const dispatch = useDispatch();
  const [logOutUser] = useLogOutUserMutation();
  const token = useSelector(state => state.contacts.token);
  const user =useSelector(state=> state.contacts.user)
  // const isLoggIn = useSelector(state => state.contacts.isLoggedIn);



  const logOut = async token => {
    await logOutUser(token);
    dispatch(userToken(''))
    dispatch(currentUser(''));
  };

  return user? (
    <>
      <h2>Hello,
        <>{user.name}</>
      </h2>
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
    <h2>Please sign in or sign up</h2>
  );
};

export default UserMenu;

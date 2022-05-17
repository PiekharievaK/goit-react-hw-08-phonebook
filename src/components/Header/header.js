import { NavLink } from 'react-router-dom';
import UserMenu from './userMenu';
import { useSelector } from 'react-redux';

export const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
    <NavLink to="/" className="headerTitleLink">
                {' '}
                <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
              </NavLink>
      
      <div className="header">
        <nav>
          {!isLoggedIn && (
            <>
              <NavLink to="/register" className="navLink">
                {' '}
                Registration
              </NavLink>
              <NavLink to="/login" className="navLink">
                {' '}
                Log in
              </NavLink>{' '}
            </>
          )}

          <NavLink to="/contacts" className="navLink">
            {' '}
            Contacts
          </NavLink>
        </nav>

        <div>
          <UserMenu />
        </div>
      </div>
    </>
  );
};

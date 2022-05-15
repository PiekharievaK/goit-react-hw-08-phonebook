import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { Suspense, useEffect, } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from 'views/loginPage';
import Registration from './Registration/Registration';
import { Header } from './Header/header';
import ContactsPage from 'views/contacts';
import { useSelector, useDispatch } from 'react-redux';
import { useGetCurrentUserQuery } from 'contactsAPI/contactsAPI';
import { userToken, isLoggedIn, currentUser } from 'redux/store'

export const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(currentUser());
  // }, [dispatch]);
  
  return (
    <>
      <Header />

      <Suspense>
        <Routes>
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <Registration />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted navigateTo="/contacts">
                <LoginPage />
              </PublicRoute>
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute navigateTo="/login">
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;

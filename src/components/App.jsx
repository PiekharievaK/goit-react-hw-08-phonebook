import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from 'views/loginPage';
import Registration from './Registration/Registration';
import { Header } from './Header/header';
import ContactsPage from 'views/contacts';
import { useGetCurrentUserQuery } from 'contactsAPI/contactsAPI';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from 'redux/store';

export const App = () => {
  const dispatch = useDispatch();
  const isLoggIn = useSelector(state => state.contacts.isLoggedIn);

  const { data, isLoading } = useGetCurrentUserQuery();

  useEffect(() => {
    dispatch(currentUser(data));
  }, [dispatch, data, isLoggIn]);

  return (
    !isLoading && (
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
    )
  );
};

export default App;

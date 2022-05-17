import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from 'views/loginPage';
import Registration from './Registration/Registration';
import { Header } from './Header/header';
import ContactsPage from 'views/contacts';
import { Homepage } from 'views/homePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/authOperation';
export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(state => state.auth.loading);
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    if (!token) {
      return;
    }
    dispatch(operations.fetchCurrentUser());
    console.log('object');
  }, [dispatch, token]);

  return (
    !isFetchingCurrentUser && (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
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
              <PrivateRoute navigateTo="/">
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Routes>
        <ToastContainer autoClose={3000} position="top-center" />
      </>
    )
  );
};

export default App;

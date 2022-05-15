import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from 'views/loginPage';
import Registration from './Registration/Registration';
import { Header } from './Header/header';
import ContactsPage from 'views/contacts';



export const App = () => {


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

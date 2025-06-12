import React from 'react';
import { AdminUserProvider } from './Context/AdminUserContext';
import AppWrapper from './AppWrapper';
import ScrollToHash from './components/ScrollToHash';

const App = () => {
  // Only apply ScrollToHash if not on /register route
  const isRegisterPage = window.location.pathname === '/register';
  return (
    <>
      {!isRegisterPage && <ScrollToHash />}
      <AdminUserProvider>
        <AppWrapper />
      </AdminUserProvider>
    </>
  );
};

export default App;

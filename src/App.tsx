import React from 'react';
import { AdminUserProvider } from './Context/AdminUserContext';
import AppWrapper from './AppWrapper';

const App = () => {
  return (
    <AdminUserProvider>
      <AppWrapper />
    </AdminUserProvider>
  );
};

export default App;

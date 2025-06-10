import React, { createContext, useContext, useState } from 'react';

interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: string;
  token?: string;
}

interface AdminUserContextType {
  adminUser: AdminUser | null;
  setAdminUser: (user: AdminUser | null) => void;
}

const AdminUserContext = createContext<AdminUserContextType | undefined>(undefined);

export const AdminUserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);

  return (
    <AdminUserContext.Provider value={{ adminUser, setAdminUser }}>
      {children}
    </AdminUserContext.Provider>
  );
};

export const useAdminUserContext = (): AdminUserContextType => {
  const context = useContext(AdminUserContext);
  if (!context) {
    throw new Error('useAdminUserContext must be used within an AdminUserProvider');
  }
  return context;
};

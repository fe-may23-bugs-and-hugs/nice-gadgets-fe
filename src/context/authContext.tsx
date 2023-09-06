import React, { createContext } from 'react';

export const AuthContext = createContext({});

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const value = {};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/*eslint-disable*/
import React, { createContext, useState } from 'react';
import { LoginTypes } from '../types/Login';
import { fetchLogin } from '../api/authAPI';

interface IAuthContext {
  userData: any[];
  onSendLogin: (userValues: LoginTypes) => void;
}

export const AuthContext = createContext<IAuthContext>({
  userData: [],
  onSendLogin: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [userData, setUserData] = useState<any>([]);
  const [userLoading, setUserLoading] = useState(false);

  const onSendLogin = (userValues: LoginTypes) => {
    setUserLoading(true);
    fetchLogin(userValues)
      .then((answ) => setUserData(answ))
      .finally(() => setUserLoading(false));
  };
  const value = { userData, onSendLogin };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/*eslint-disable*/
import React, { createContext, useState } from 'react';
import { LoginTypes } from '../types/Login';
import { fetchAuthMe, fetchLogin, fetchRegister } from '../api/authAPI';
import { useLocalStorage } from 'usehooks-ts';
import { UserLogin } from '../types/UserLogin';
import { RegisterData } from '../types/Register';

interface IAuthContext {
  userData: UserLogin | null;
  onSendLogin: (userValues: LoginTypes) => void;
  isAuth: boolean;
  token: string;
  updateAuthStatus: () => void;
  onRegisterUser: (userRegister: RegisterData) => void;
  error: string;
  onResetErrors: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  userData: null,
  onSendLogin: () => {},
  isAuth: false,
  token: '',
  updateAuthStatus: () => {},
  onRegisterUser: () => {},
  onResetErrors: () => {},
  error: '',
});

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [userData, setUserData] = useState<UserLogin | null>(null);
  const [isAuth, setIsAuth] = useState(false);
  const [userLoading, setUserLoading] = useState(false);
  const [token, setToken] = useLocalStorage('token', '');
  const [error, setError] = useState('');

  const onSendLogin = (userValues: LoginTypes) => {
    setUserLoading(true);
    fetchLogin(userValues)
      .then((answ) => {
        setToken(answ.token);
        setUserData(answ);
        setIsAuth(true);
      })
      .catch(() => {
        setError('Invalid login or password');
      })
      .finally(() => setUserLoading(false));
  };

  const onLogoutUser = () => {
    setIsAuth(false);
    setUserData(null);
    setToken('');
  };

  const onResetErrors = () => {
    setError('');
  };

  const onRegisterUser = (userRegister: RegisterData) => {
    setUserLoading(true);
    fetchRegister(userRegister)
      .then((answ) => {
        setToken(answ.token);
        setUserData(answ);
        setIsAuth(true);
      })
      .finally(() => setUserLoading(false));
  };

  const updateAuthStatus = () => {
    setIsAuth(true);
  };

  const value = {
    userData,
    onSendLogin,
    isAuth,
    token,
    updateAuthStatus,
    onRegisterUser,
    error,
    onResetErrors,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

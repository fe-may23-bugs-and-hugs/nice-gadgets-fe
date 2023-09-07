import React, { createContext, useState } from 'react';
import { LoginTypes, RegisterData, UserLogin } from '../types';
import { useLocalStorage } from 'usehooks-ts';
import { fetchLogin, fetchRegister } from '../api';

interface IAuthContext {
  userData: UserLogin | null;
  onSendLogin: (userValues: LoginTypes) => void;
  isAuth: boolean;
  token: string;
  updateAuthStatus: () => void;
  onRegisterUser: (userRegister: RegisterData) => void;
  loginError: boolean;
  onResetErrors: () => void;
  onLogoutUser: () => void;
  registrError: boolean;
}

export const AuthContext = createContext<IAuthContext>({
  userData: null,
  onSendLogin: () => {},
  isAuth: false,
  token: '',
  updateAuthStatus: () => {},
  onRegisterUser: () => {},
  onResetErrors: () => {},
  loginError: false,
  onLogoutUser: () => {},
  registrError: false,
});

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [userData, setUserData] = useState<UserLogin | null>(null);
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useLocalStorage('token', '');
  const [loginError, setLoginError] = useState(false);
  const [registrError, setRegisterError] = useState(false);

  const onSendLogin = (userValues: LoginTypes) => {
    fetchLogin(userValues)
      .then((answ) => {
        setToken(answ.token);
        setUserData(answ);
        setIsAuth(true);
      })
      .catch(() => {
        setLoginError(true);
      });
  };

  const onLogoutUser = () => {
    setIsAuth(false);
    setUserData(null);
    setToken('');
  };

  const onResetErrors = () => {
    setLoginError(false);
    setRegisterError(false);
  };

  const onRegisterUser = (userRegister: RegisterData) => {
    fetchRegister(userRegister)
      .then((answ) => {
        setToken(answ.token);
        setUserData(answ);
        setIsAuth(true);
      })
      .catch(() => {
        setRegisterError(true);
      });
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
    loginError,
    onResetErrors,
    onLogoutUser,
    registrError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

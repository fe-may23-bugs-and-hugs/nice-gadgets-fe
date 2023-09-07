import React, { useContext, useEffect, useState } from 'react';
import {
  SectionWrapper,
  Form,
  InputWrapper,
  SubmitButton,
  Label,
  Input,
  FormWrapper,
  FormLink,
  ToggleButton,
  IconWrapper,
  EyeWrapper,
  Title,
} from '../Form.styled';
import { useForm } from 'react-hook-form';
import { LoginTypes } from '../../../../types/Login';
import { AuthContext } from '../../../../context/authContext';
import { Navigate } from 'react-router-dom';
import Notiflix from 'notiflix';
import { Icon, IconSprite } from '../../../shared';
import { useTheme } from '../../../../context';

export const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { onSendLogin, isAuth, loginError, onResetErrors }
    = useContext(AuthContext);
  const { isDarkTheme } = useTheme() || { isDarkTheme: false };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    clearErrors,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  useEffect(() => {
    onResetErrors();
  }, [loginError]);

  useEffect(() => {
    if (isAuth) {
      Notiflix.Notify.init({
        position: 'right-bottom',
      });
      Notiflix.Notify.success('Successfully logged', { timeout: 1000 });
    }
  }, [isAuth]);

  useEffect(() => {
    if (loginError) {
      Notiflix.Notify.init({
        position: 'right-bottom',
      });
      Notiflix.Notify.failure('Invalid login or password', { timeout: 1000 });
    }
  }, [loginError]);

  const onHandleSubmit = (values: LoginTypes) => {
    const data = onSendLogin(values);

    return data;
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  const disabledFunc = Boolean(errors.email || errors.password);

  const handleEmailInputChange = () => {
    clearErrors('email');
  };

  const handlePasswordInputChange = () => {
    clearErrors('password');
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SectionWrapper>
      <FormWrapper>
        <Title isDarkTheme={isDarkTheme}>Log In</Title>

        <Form onSubmit={handleSubmit(onHandleSubmit)}>
          <InputWrapper>
            <Label isDarkTheme={isDarkTheme} htmlFor="email">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter email"
              {...register('email', {
                required: 'Please, write your email',
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: 'Invalid email address',
                },
              })}
              onFocus={handleEmailInputChange}
            />
            {errors.email && (
              <span style={{ color: 'red' }}>{errors.email.message}</span>
            )}
          </InputWrapper>
          <InputWrapper>
            <Label isDarkTheme={isDarkTheme} htmlFor="password">
              Password
            </Label>
            <EyeWrapper>
              <Input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter password"
                {...register('password', {
                  required: 'Please,write your password',
                  minLength: {
                    value: 4,
                    message: 'Password should be at least 4 characters long',
                  },
                })}
                onFocus={handlePasswordInputChange}
              />
              <ToggleButton onClick={handlePasswordToggle}>
                <IconSprite />
                <IconWrapper>
                  {showPassword ? (
                    <Icon spriteName="eye-closed" />
                  ) : (
                    <Icon spriteName="eye-open" />
                  )}
                </IconWrapper>
              </ToggleButton>
            </EyeWrapper>
            {errors.password && (
              <span style={{ color: 'red' }}>{errors.password.message}</span>
            )}
          </InputWrapper>
          <SubmitButton disabled={disabledFunc || !isValid} type="submit">
            Log In
          </SubmitButton>
        </Form>
        <FormLink isDarkTheme={isDarkTheme} to="/auth/signUp">
          Sign Up
        </FormLink>
      </FormWrapper>
    </SectionWrapper>
  );
};

/*eslint-disable*/

import React, { useContext, useEffect, useState } from 'react';
import {
  Form,
  FormLink,
  FormWrapper,
  IconWrapper,
  Input,
  InputWrapper,
  Label,
  SectionWrapper,
  SubmitButton,
  ToggleButton,
} from '../Form.styled';
import { useForm } from 'react-hook-form';
import { RegisterData } from '../../../../types/Register';
import { AuthContext } from '../../../../context';
import { Navigate } from 'react-router-dom';
import Notiflix from 'notiflix';
import { Icon, IconSprite } from '../../../shared';

export const RegistrationForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { onRegisterUser, isAuth, registrError, onResetErrors } =
    useContext(AuthContext);

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const onHandleSubmit = (values: RegisterData) => {
    console.log(values);

    onRegisterUser(values);
  };

  const handleEmailInputChange = () => {
    clearErrors('email');
  };

  const handlePasswordInputChange = () => {
    clearErrors('password');
  };

  const handleNameInputChange = () => {
    clearErrors('fullName');
  };

  useEffect(() => {
    onResetErrors();
  }, [registrError]);

  useEffect(() => {
    if (isAuth) {
      Notiflix.Notify.success('Successfully register');
    }
  }, [isAuth]);

  useEffect(() => {
    if (registrError) {
      Notiflix.Notify.failure('There is a problem with registration');
    }
  }, [registrError]);

  if (isAuth) {
    return <Navigate to="/" />;
  }

  const disabledFunc = Boolean(
    errors.email || errors.password || errors.fullName,
  );

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SectionWrapper>
      <FormWrapper>
        <h2> Sign up</h2>
        <Form onSubmit={handleSubmit(onHandleSubmit)}>
          <InputWrapper>
            <Label htmlFor="name">Name</Label>
            <Input
              {...register('fullName', {
                required: 'Please,write your name',
                minLength: {
                  value: 3,
                  message: 'Name should be at least 3 characters long',
                },
              })}
              aria-invalid={errors.fullName?.message ? 'true' : 'false'}
              type="text"
              id="name"
              placeholder="Enter name"
              onFocus={handleNameInputChange}
            />
            {errors.fullName && (
              <span style={{ color: 'red' }}>{errors.fullName.message}</span>
            )}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="email">Email</Label>
            <Input
              {...register('email', {
                required: 'Please, write your email',
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: 'Invalid email address',
                },
              })}
              type="email"
              id="email"
              placeholder="Enter email"
              required
              onFocus={handleEmailInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">Password</Label>
            <Input
              {...register('password', {
                required: 'Please,write your password',
                minLength: {
                  value: 4,
                  message: 'Password should be at least 4 characters long',
                },
              })}
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Enter password"
              required
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
            {errors.password && (
              <span style={{ color: 'red' }}>{errors.password.message}</span>
            )}
          </InputWrapper>
          <SubmitButton disabled={!isValid || disabledFunc} type="submit">
            Register
          </SubmitButton>
        </Form>
        <FormLink to="/auth/logIn">Log In</FormLink>
      </FormWrapper>
    </SectionWrapper>
  );
};

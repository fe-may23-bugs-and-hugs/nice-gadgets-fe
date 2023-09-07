/*eslint-disable*/
import React, { useContext, useState } from 'react';
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
} from '../Form.styled';
import { useForm } from 'react-hook-form';
import { LoginTypes } from '../../../../types/Login';
import { AuthContext } from '../../../../context/authContext';
import { Navigate } from 'react-router-dom';
import { Icon, IconSprite } from '../../../shared';

export const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { onSendLogin, isAuth, error, onResetErrors } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: 'test1@gmail.com',
      password: '12345',
    },
    mode: 'onBlur',
  });

  const onHandleSubmit = (values: LoginTypes) => {
    const data = onSendLogin(values);

    console.log(data);
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  const clearError = () => {
    onResetErrors();
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SectionWrapper>
      <FormWrapper>
        <h2> Log In</h2>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <Form onSubmit={handleSubmit(onHandleSubmit)}>
          <InputWrapper>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter email"
              {...register('email', { required: 'Please,write your email' })}
              onChange={clearError}
            />
            {errors.email && (
              <span style={{ color: 'red' }}>{errors.email.message}</span>
            )}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">Password</Label>
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
              onChange={clearError}
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
          <SubmitButton disabled={!isValid} type="submit">
            Log In
          </SubmitButton>
        </Form>
        <FormLink to="/auth/signUp">Sign Up</FormLink>
      </FormWrapper>
    </SectionWrapper>
  );
};

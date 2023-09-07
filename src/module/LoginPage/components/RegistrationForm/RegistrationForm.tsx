/*eslint-disable*/

import React, { useContext, useEffect } from 'react';
import {
  Form,
  FormWrapper,
  Input,
  InputWrapper,
  Label,
  SectionWrapper,
  SubmitButton,
} from '../Form.styled';
import { useForm } from 'react-hook-form';
import { RegisterData } from '../../../../types/Register';
import { AuthContext } from '../../../../context';
import { Navigate } from 'react-router-dom';
import Notiflix from 'notiflix';

export const RegistrationForm: React.FC = () => {
  const { onRegisterUser, isAuth, registrError, onResetErrors } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '@gmail.com',
      password: '',
    },
    mode: 'onBlur',
  });

  const onHandleSubmit = (values: RegisterData) => {
    console.log(values);

    onRegisterUser(values);
  };

  const clearError = (fieldName: string) => {
    onResetErrors();
    //@ts-ignore
    setError(fieldName, {
      type: 'manual',
      message: '',
    });
  };

  useEffect(() => {
    onResetErrors();
  }, []);

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
              onChange={() => clearError('fullName')}
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
              onChange={() => clearError('email')}
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
              type="password"
              id="password"
              placeholder="Enter password"
              required
              onChange={() => clearError('password')}
            />
            {errors.password && (
              <span style={{ color: 'red' }}>{errors.password.message}</span>
            )}
          </InputWrapper>
          <SubmitButton disabled={!isValid} type="submit">
            Register
          </SubmitButton>
        </Form>
      </FormWrapper>
    </SectionWrapper>
  );
};

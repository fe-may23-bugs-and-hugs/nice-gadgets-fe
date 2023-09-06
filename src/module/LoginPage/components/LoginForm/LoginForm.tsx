/*eslint-disable*/
import React, { useContext } from 'react';
import {
  SectionWrapper,
  Form,
  InputWrapper,
  SubmitButton,
  Label,
  Input,
  FormWrapper,
  FormLink,
} from '../Form.styled';
import { useForm } from 'react-hook-form';
import { LoginTypes } from '../../../../types/Login';
import { AuthContext } from '../../../../context/authContext';

export const LoginForm: React.FC = () => {
  const { onSendLogin, userData } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onHandleSubmit = (values: LoginTypes) => {
    const normalizeValue = JSON.stringify(values) as unknown as LoginTypes;

    console.log(normalizeValue);

    onSendLogin(normalizeValue);
  };

  return (
    <SectionWrapper>
      <FormWrapper>
        <h2> Log In</h2>
        <Form onSubmit={handleSubmit(onHandleSubmit)}>
          <InputWrapper>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter email"
              {...register('email', { required: 'Please,write your email' })}
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter password"
              {...register('password', {
                required: 'Please,write your password',
              })}
            />
          </InputWrapper>
          <SubmitButton type="submit">Log In</SubmitButton>
        </Form>
        <FormLink to="/signUp">Sign Up</FormLink>
      </FormWrapper>
    </SectionWrapper>
  );
};

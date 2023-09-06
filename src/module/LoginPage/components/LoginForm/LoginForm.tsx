import React, { useState } from 'react';
import {
  SectionWrapper,
  Form,
  InputWrapper,
  SubmitButton,
  Label,
  Input,
  FormWrapper,
  FormLink,
} from './LoginForm.styled';
import { useLocation } from 'react-router-dom';

// enum FORMTYPES {
//   LOGIN = 'Log In',
//   SIGNUP = 'Sign Up',
// }

const formTypeData = [
  {
    type: 'Log In',
    path: '/logIn',
  },
  {
    type: 'Sign Up',
    path: '/signUp',
  },
];

export const LoginForm = () => {
  const currentLocation = useLocation();
  const currentForm = formTypeData.find(
    (form) => form.path === currentLocation.pathname,
  );
  const otherForm = formTypeData.find(
    (form) => form.path !== currentLocation.pathname,
  );

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [userNameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUserNameError(currentForm?.type === 'Sign Up' && !userName);
    setEmailError(!email);
    setPasswordError(!password);

    if (userNameError || emailError || passwordError) {
      return;
    }

    setUserName('');
    setEmail('');
    setPassword('');
  };

  return (
    <SectionWrapper>
      <FormWrapper>
        <h2>{currentForm ? currentForm.type : 'Log In'}</h2>
        <Form onSubmit={handleSubmit}>
          {currentForm?.type === 'Sign Up' && (
            <InputWrapper>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                value={userName}
                onChange={handleNameChange}
                placeholder="Enter name"
                required
              />
            </InputWrapper>
          )}
          <InputWrapper>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter email"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter password"
              required
            />
          </InputWrapper>
          <SubmitButton type="submit">
            {currentForm ? currentForm.type : 'Log In'}
          </SubmitButton>
        </Form>
        <FormLink to={otherForm?.path || '/signUp'}>
          {otherForm?.type || 'Sign Up'}
        </FormLink>
      </FormWrapper>
    </SectionWrapper>
  );
};

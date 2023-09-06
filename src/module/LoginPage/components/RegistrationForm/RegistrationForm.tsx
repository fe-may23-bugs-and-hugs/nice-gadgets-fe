/*eslint-disable*/

import React from 'react';
import {
  Form,
  FormLink,
  FormWrapper,
  Input,
  InputWrapper,
  Label,
  SectionWrapper,
  SubmitButton,
} from '../Form.styled';

export const RegistrationForm: React.FC = () => {
  return (
    <SectionWrapper>
      <FormWrapper>
        <h2> Sign up</h2>
        <Form>
          <InputWrapper>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Enter name" required />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Enter email" required />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter password"
              required
            />
          </InputWrapper>
          <SubmitButton type="submit">Log In</SubmitButton>
        </Form>
        <FormLink to="/signUp">Sign Up</FormLink>
      </FormWrapper>
    </SectionWrapper>
  );
};

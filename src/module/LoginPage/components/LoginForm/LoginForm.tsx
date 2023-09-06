import React from 'react';
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
// import { useForm } from 'react-hook-form';

export const LoginForm: React.FC = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   setError,
  //   formState: { errors, isValid },
  // } = useForm({
  //   defaultValues: {
  //     email: '',
  //     password: '',
  //   },
  // });

  return (
    <SectionWrapper>
      <FormWrapper>
        <h2> Log In</h2>
        <Form>
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

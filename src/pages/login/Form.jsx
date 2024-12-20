"use client";
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";

const StyledForm = styled.form`
  padding: 60px 30px;
  background: #eeeeee;
  border-radius: 20px;
  margin: 80px auto;
  max-width: 400px;
  margin-top: 140px;

  .button-wrapper{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
  }
`;

const FormHeading = styled.h1`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  line-height: 36px;
  margin-bottom: 30px;
  color: orange;
`;



const LoginForm = () => {
  return (
    <Container>
      <StyledForm>
        <FormHeading>Login Page</FormHeading>
        <FloatingLabel
          controlId="floatingInput"
          label="Enter Email"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="Enter Email" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Enter Password"
          className="mb-3"
        >
          <Form.Control type="password" placeholder="Enter Password" />
        </FloatingLabel>
        <div className="button-wrapper">


        <Link href="/forgot-password">Forgot password.</Link>
        <Button variant="primary">Login</Button>
        </div>
      </StyledForm>
    </Container>
  );
};

export default LoginForm;

"use client";
import { saveToken, saveUser } from "@/utils/helper/localStorage";
import { getLogin } from "@/utils/services/login.services";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";

const StyledForm = styled.form`
  padding: 60px 30px;
  background: #eeeeee;
  border-radius: 20px;
  margin: 80px auto;
  max-width: 400px;
  margin-top: 140px;

  .button-wrapper {
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
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const route = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();

    getLogin(data)
      .then((resp) => {
        setData("");
        setError("");
        saveToken(resp?.token);
        saveUser(resp?.user)
        route.push('/dashboard/news');
      })
      .catch((err) => {
        setError({
          email: err?.errors?.email,
          password: err?.errors?.password,
        });
        console.log("err==>", err);
      });
  };

  console.log('error', error)

  return (
    <Container>
      <StyledForm>
        <FormHeading>Login Page</FormHeading>
        <FloatingLabel
          controlId="floatingInput"
          label="Enter Email"
          className="mb-3"
        >
          <Form.Control
            value={data.email || ""}
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Enter Email"
          />
          {error?.email && <p>{error.email}</p>}
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Enter Password"
          className="mb-3"
        >
          <Form.Control
            onChange={handleChange}
            value={data.password || ""}
            name="password"
            type="password"
            placeholder="Enter Password"
          />
          {error?.password && <p>{error.password}</p>}

        </FloatingLabel>
        <div className="button-wrapper">
          <Link href="/forgot-password">Forgot password.</Link>
          <Button onClick={handleSubmit} variant="primary">
            Login
          </Button>
        </div>
      </StyledForm>
    </Container>
  );
};

export default LoginForm;

"use client";
import { saveToken, saveUser } from "@/utils/helper/localStorage";
import { getLogin } from "@/utils/services/login.services";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import logo from "@/assets/images/new-icon.png";
import Image from "next/image";
import Input from "@/components/form/Input";

const Section = styled.section`
background: linear-gradient(to right, rgba(0, 0, 0, 0.315), rgba(0, 0, 0, 0.1)), url('/images/logos/indian-map.avif');
background-size: cover;
background-position: top;
min-height: 100vh;
height: 100%;
padding-top: 100px;
`
const StyledForm = styled.form`
  padding: 60px 30px;
  background: rgba(255, 255, 255, 0.712);
  backdrop-filter: blur(10px);
  border-radius: 13px;
  max-width: 400px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  margin: 0 auto;

  .button-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
  }
`;

const FormHeading = styled(Link)`
text-align: center;
display: block;
 img{
  width: 65%;
  height: auto;
  margin-bottom: 40px; 
  }
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

    const formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }

    getLogin(formData)
      .then((resp) => {
        debugger;
        setData("");
        setError("");
        saveToken(resp?.data?.token);
        saveUser(resp?.data?.user)
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
    <Section>
      <Container>
        <StyledForm>
          <FormHeading href={'/'}>
            <Image src={logo}></Image>

          </FormHeading>

          <Input
            label="Email"
            placeholder="Enter Email"
            name="email"
            value={data.email || ""}
            onChange={handleChange}
            error={error?.email}
            className="mb-4"
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            name="password"
            value={data.password || ""}
            onChange={handleChange}
            error={error?.password}
            type="password"

          />

          <div className="button-wrapper">
            <Link href="/forgot-password">Forgot password.</Link>
            <Button onClick={handleSubmit} variant="primary">
              Login
            </Button>
          </div>
        </StyledForm>
      </Container>
    </Section>
  );
};

export default LoginForm;

"use client";
import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  min-width: 1024px;

  #main-content {
    padding-top: 20px;
    width: calc(100% -  200px);
    height: calc(100vh);
    overflow-y: auto;
  }
`;
const LayoutWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default LayoutWrapper;

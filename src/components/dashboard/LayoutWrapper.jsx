"use client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import Sidebar from "./sidebar/Sidebar";

const collapsedStyle = css`
  #sidebar {
    width: 60px;
    padding: 30px 7px;
  }

  #main-content {
    width: calc(100% - 60px);
  }
  .nav-text {
    opacity: 0;
    pointer-events: none;
  }
`;

const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  min-width: 1024px;

  #sidebar {
    width: 200px;
  }

  #main-content {
    transition: all 0.3s ease;
    padding-top: 20px;
    width: calc(100% - 200px);
    height: calc(100vh);
    overflow-y: auto;
  }
  ${({ collapsed }) => (collapsed ? collapsedStyle : "")}
`;
const LayoutWrapper = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Wrapper collapsed={collapsed}>
        <Sidebar toggleSidebar={toggleSidebar} collapsed={collapsed} />{" "}
        {children}
      </Wrapper>
    </>
  );
};

export default LayoutWrapper;

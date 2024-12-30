"use client";

import {
  category_icon,
  collapse_icon,
  create_icon,
  expand_icon,
  home_icon,
  logout_icon,
  news_paper_icon,
  tag_icon,
} from "@/assets/icons/dashboard.icon";
import { clearToken } from "@/utils/helper/localStorage";
import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";
import { Button } from "react-bootstrap";

const Wrapper = styled.nav`
  display: flex;
  gap: 15px;
  flex-direction: column;
  padding: 30px 20px;
  background: #d9d9d9;
  height: 100%;
  transition: all .3s ease;

  .link-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: start;
    height: 100%;

  }

  .collapse-button{
    border: none;
    background: transparent;
    margin-bottom: 40px;
  }
`;
const StyledLink = styled(Link)`
  display: flex;
  font-size: 18px;
  text-decoration: none;
  color: #2b2b2b;
  font-weight: 500;
  padding: 3px 10px;
  transition: all 0.3s ease;
  align-items: center;
  gap: 10px;
  
  .nav-text{
    display: inline-block;
    min-width: max-content;
    transition: all 0.3s ease;
  }

  &:hover {
    color: #ff5121;
  }
`;

const Sidebar = ({collapsed, toggleSidebar}) => {
  return (
    <Wrapper id="sidebar" >
      <div className="link-wrapper">
        <button className="collapse-button" onClick={toggleSidebar}>{collapsed ? expand_icon: collapse_icon}</button>
        <StyledLink href={"/dashboard/news"}>
          {news_paper_icon}
          <span className="nav-text">News</span>
        </StyledLink>
        <StyledLink href={"/dashboard/news/add"}>
          {create_icon} <span className="nav-text">Create News</span>
        </StyledLink>
        <StyledLink href={"/dashboard/categories"}>
          {category_icon} <span className="nav-text">Categories</span>
        </StyledLink>
        <StyledLink href={"/dashboard/tags"}>{tag_icon} <span className="nav-text">Tags</span></StyledLink>
        <StyledLink href={"/"}>{home_icon} <span className="nav-text">Home</span></StyledLink>
      </div>
      <Button onClick={clearToken}>{logout_icon}</Button>
    </Wrapper>
  );
};

export default Sidebar;

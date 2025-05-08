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
  users_icon,
} from "@/assets/icons/dashboard.icon";
import { clearToken, clearUser } from "@/utils/helper/localStorage";
import useAuth from "@/utils/helper/useAuth";
import styled from "@emotion/styled";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "react-bootstrap";
import UserAvatar from "./UserAvatar";
import logo from "@/assets/images/full-logo.svg";
import short_logo from "@/assets/images/short-logo.svg";
import Image from "next/image";

const Wrapper = styled.nav`
  display: flex;
  gap: 15px;
  flex-direction: column;
  padding: 30px 20px;
  background: #d9d9d9;
  height: 100%;
  transition: all 0.3s ease;

  .link-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: start;
    height: 100%;
  }

  .collapse-button {
    border: none;
    background: transparent;
    margin-bottom: 25px;

    img{
      width: 100%;
      height: auto;
    }
  }

`;
const StyledLink = styled(Link)`
  display: flex;
  font-size: 16px;
  text-decoration: none;
  color: #2b2b2b;
  font-weight: 500;
  padding: 3px 10px;
  transition: all 0.3s ease;
  align-items: center;
  gap: 10px;

  .nav-text {
    display: inline-block;
    min-width: max-content;
    transition: all 0.3s ease;
  }

  &:hover,
  &.active {
    color: #ff5121;
  }
`;



const Sidebar = ({ collapsed, toggleSidebar }) => {
  const path = usePathname();
  const user = useAuth();
  const isAdmin = user?.role == 'admin';

  const handleLogOut = ()=>{
    clearToken();
    clearUser();
    window.location.href = "/";
  }

  return (
    <Wrapper id="sidebar">
      <div className="link-wrapper">
        <button className="collapse-button" onClick={toggleSidebar}>
          {collapsed ? <Image src={short_logo}/> : <Image src={logo}/>}
        </button>
        <StyledLink
          className={path == "/dashboard/dashboard" ? "active" : ""}
          href={"/dashboard/dashboard"}
        >
          <span class="material-symbols-outlined">dashboard</span>
          <span className="nav-text">Dashboard</span>
        </StyledLink>
        <StyledLink
          className={path == "/dashboard/news" ? "active" : ""}
          href={"/dashboard/news"}
        >
          {news_paper_icon}
          <span className="nav-text">News</span>
        </StyledLink>
        <StyledLink
          className={path == "/dashboard/news/add" ? "active" : ""}
          href={"/dashboard/news/add"}
        >
          {create_icon} <span className="nav-text">Create News</span>
        </StyledLink>
        <StyledLink
          className={path == "/dashboard/articles" ? "active" : ""}
          href={"/dashboard/articles"}
        >
          <span class="material-symbols-outlined">article</span>
          <span className="nav-text">Articles</span>
        </StyledLink>
        
        {isAdmin && (
          <StyledLink
            className={path == "/dashboard/categories" ? "active" : ""}
            href={"/dashboard/categories"}
          >
            <span class="material-symbols-outlined">
category
</span> <span className="nav-text">Categories</span>
          </StyledLink>
        )}

        {isAdmin && (
          <StyledLink
            className={path == "/dashboard/tags" ? "active" : ""}
            href={"/dashboard/tags"}
          >
            {tag_icon} <span className="nav-text">Tags</span>
          </StyledLink>
        )}
        {isAdmin && (
          <StyledLink
            className={path == "/dashboard/submissions" ? "active" : ""}
            href={"/dashboard/submissions"}
          >
           <span class="material-symbols-outlined">mail</span> <span className="nav-text">Submissions</span>
          </StyledLink>
        )}

        {isAdmin && (
          <StyledLink
            className={path == "/dashboard/users" ? "active" : ""}
            href={"/dashboard/users"}
          >
            {users_icon} <span className="nav-text">Users</span>
          </StyledLink>
        )}
        <StyledLink href={"/"}>
          {home_icon} <span className="nav-text">Home</span>
        </StyledLink>
      </div>
      <UserAvatar handleLogOut={handleLogOut} user={user}/>
    </Wrapper>
  );
};

export default Sidebar;

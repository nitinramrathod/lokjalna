"use client";
import { clearToken } from "@/utils/helper/localStorage";
import styled from "@emotion/styled";
import Link from "next/link";
import { Button } from "react-bootstrap";

const Wrapper = styled.nav`
  display: flex;
  gap: 15px;
  flex-direction: column;
  padding: 30px 20px;
  background: #d9d9d9;
  width: 200px;
  height: 100%;

  .link-wrapper{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: start;
    height: 100%;
  }
`;
const StyledLink = styled(Link)`
  display: flex;
  font-size: 18px;
  text-decoration: none;
  color: #2b2b2b;
  font-weight: 500;
  padding: 3px 10px;
  transition: all .3s ease;

  &:hover {
    color: #ff5121;
  }
`;


const Sidebar = () => {

  return (
    <Wrapper>
      <div className="link-wrapper">

      <StyledLink href={"/dashboard/news"}>News</StyledLink>
      <StyledLink href={"/dashboard/news/add"}>Create News</StyledLink>
      <StyledLink href={"/dashboard/categories"}>Categories</StyledLink>
      <StyledLink href={"/dashboard/tags"}>Tags</StyledLink>
      <StyledLink href={"/"}>Home</StyledLink>
      </div>
      <Button onClick={clearToken}>Log Out</Button>

    </Wrapper>
  );
};

export default Sidebar;

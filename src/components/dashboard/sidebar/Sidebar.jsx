"use client";
import styled from "@emotion/styled";
import Link from "next/link";

const Wrapper = styled.nav`
  display: flex;
  gap: 15px;
  flex-direction: column;
  padding: 30px 20px;
  background: #d9d9d9;
  width: 200px;
  height: 100%;
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
      <StyledLink href={"/dashboard/news"}>News</StyledLink>
      <StyledLink href={"/dashboard/news/add"}>Create News</StyledLink>
      <StyledLink href={"/dashboard/news"}>Categories</StyledLink>
      <StyledLink href={"/dashboard/news"}>Tags</StyledLink>
    </Wrapper>
  );
};

export default Sidebar;

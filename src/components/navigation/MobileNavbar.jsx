"use client";
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

const Wrapper = styled.div`
  position: fixed;
  background: #fffffff5;
  width: 100%;
  height: 100vh;
  top: 60px;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(-100%)")};
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  line-height: 24px;
  text-decoration: none;
  font-weight: 500;
  color: #174b80;
  transition: all 0.3s ease;

  &:hover {
    color: orange;
  }

  @media (min-width: 1200px) {
    font-size: 15px;
    line-height: 18px;
    font-weight: 400;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 0;
`;

export const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Local News", href: "/news/local-news" },
  { name: "World News", href: "/news/world-news" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
];
const MobileNavbar = ({ show }) => {
  return (
    <Wrapper show={show}>
      <Container>
        <MenuWrapper>
          {navigationLinks.map((link, index) => (
            <StyledLink key={index} href={link.href}>
              {link.name}
            </StyledLink>
          ))}
        </MenuWrapper>
      </Container>
    </Wrapper>
  );
};

export default MobileNavbar;

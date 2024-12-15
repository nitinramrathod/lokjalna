import React from "react";
import { navigationLinks, StyledLink } from "./MobileNavbar";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  gap: 40px;
  padding-top: 5px;
  display: none;

  @media (min-width: 1200px) {
    display: flex;
    justify-content: end;
  }
`;
const WebNavbar = () => {
  return (
    <Wrapper>
      {navigationLinks.map((link, index) => (
        <StyledLink key={index} href={link.href}>
          {link.name}
        </StyledLink>
      ))}
    </Wrapper>
  );
};

export default WebNavbar;
import React from "react";
import { StyledLink } from "./MobileNavbar";
import styled from "@emotion/styled";
import navigationLinks from "@/utils/constants/navigation-links.constant";

const Wrapper = styled.div`
  gap: 40px;
  padding-top: 10px;
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

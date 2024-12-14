import React from "react";
import { StyledNavigationBox, StyledNavWrapper } from "./home.styled";
import Image from "next/image";
import { Container } from "react-bootstrap";
const NavigationBox = () => {
  return (
    <StyledNavigationBox>
      <Image
        width={100}
        height={100}
        src="/images/landing-news.png"
        alt="landing image"
      />
      <div className="text-wrapper">
        <h3 className="title">Technology</h3>
        <p className="description">Lorem ipsum dolor sit. ipsum dolor.</p>
      </div>
    </StyledNavigationBox>
  );
};
const LandingNavigation = () => {
  return (
    <Container>
      <StyledNavWrapper>
        <NavigationBox />
        <NavigationBox />
        <NavigationBox />
        <NavigationBox />
      </StyledNavWrapper>
    </Container>
  );
};

export default LandingNavigation;

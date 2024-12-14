import React from "react";
import { StyledNavigationBox, StyledNavWrapper } from "./home.styled";
import Image from "next/image";
import { Container } from "react-bootstrap";
const NavigationBox = ({data}) => {
  return (
    <StyledNavigationBox>
      <Image
        width={100}
        height={100}
        src="/images/landing-news.png"
        alt="landing image"
      />
      <div className="text-wrapper">
        <h3 className="title">{data.name}</h3>
        <p className="description">{data.description}</p>
      </div>
    </StyledNavigationBox>
  );
};

const navigationItems = [
    {
        name:"Politics and Government",
        description:"Elections, policies, diplomacy, and governance updates.",
    },
    {
        name:"Business and Finance",
        description:"Markets, economy, corporate news, personal finance.",
    },
    {
        name:"Sports",
        description:"Games, scores, athletes, events, and analysis.",
    },
    {
        name:"Technology and Science",
        description:"Innovations, gadgets, discoveries, and tech trends.",
    },
]
const LandingNavigation = () => {
  return (
    <Container>
      <StyledNavWrapper>
        {navigationItems.map((item, index) => (
          <NavigationBox data={item} key={index}></NavigationBox>))}
      </StyledNavWrapper>
    </Container>
  );
};

export default LandingNavigation;

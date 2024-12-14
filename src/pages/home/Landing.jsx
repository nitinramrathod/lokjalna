import React from "react";
import { Container } from "react-bootstrap";
import {
  Category,
  MainNews,
  SectionHeading,
  StyledNavigationBox,
  Wrapper,
} from "./home.styled";
import Image from "next/image";

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

const Landing = () => {
  return (
    <Container>
      <Wrapper>
        <div className="landing-nav-wrapper">
          <NavigationBox />
          <NavigationBox />
          <NavigationBox />
          <NavigationBox />
        </div>
        <SectionHeading>Breaking News</SectionHeading>
        <MainNews>
          <Image
            width={600}
            height={300}
            src="/images/landing-news.png"
            alt="landing image"
          />
          <div className="category-wrapper">
            <Category> sport</Category>
            <Category> cricket</Category>
            <Category> ipl</Category>
          </div>

          <h2 className="heading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quas
            placeat rem voluptatem?
          </h2>
          <p className="description">14th Dec 2024</p>
        </MainNews>
      </Wrapper>
    </Container>
  );
};

export default Landing;

import React from "react";
import { Container } from "react-bootstrap";
import {
  Category,
  MainNews,
  SectionHeading,
  Title,
  Wrapper,
} from "./home.styled";
import Image from "next/image";
import TrendingSection from "./TrendingSection";



const Landing = () => {
  return (
    <Container>
      <Wrapper>

        <div className="breaking-news">

     
        <SectionHeading>Breaking News</SectionHeading>
        <MainNews href="/news/sport/detail">
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

          <Title className="heading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quas
            placeat rem voluptatem?
          </Title>
          <p className="description">14th Dec 2024</p>
        </MainNews>
        </div>
        <TrendingSection></TrendingSection>
      </Wrapper>
    </Container>
  );
};

export default Landing;

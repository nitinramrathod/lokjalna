import React from "react";
import { SectionHeading } from "./home.styled";
import Image from "next/image";
import { Container } from "react-bootstrap";
import StyledLatestCard, { Wrapper } from "./trending-section.styled";

const LatestCard = () => {
  return (
    <StyledLatestCard>
      <Image
        width={100}
        height={100}
        src="/images/landing-news.png"
        alt="landing image"
      />
      <div className="text-wrapper">
        <h3 className="title">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam veri
          voluptate reiciendis?
        </h3>
        <p className="description">14th Dec 2024</p>
      </div>
    </StyledLatestCard>
  );
};

const TrendingSection = () => {
  return (
    <Wrapper>
        <SectionHeading>Trending News</SectionHeading>
        <div className="card-wrapper">
          <LatestCard />
          <LatestCard />
          <LatestCard />
          <LatestCard />
        </div>
    </Wrapper>
  );
};

export default TrendingSection;

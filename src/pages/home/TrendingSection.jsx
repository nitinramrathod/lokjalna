import React from "react";
import { Date, SectionHeading } from "./home.styled";
import Image from "next/image";
import { StyledLatestCard, Title, Wrapper } from "@/pages/home/trending-section.styled";

const LatestCard = () => {
  return (
    <StyledLatestCard href="/news/trending/detail">
      <Image
        width={100}
        height={100}
        src="/images/landing-news.png"
        alt="landing image"
      />
      <div className="text-wrapper">
        <Title className="title">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam veri
          voluptate reiciendis?
        </Title>
        <Date>14th Dec 2024</Date>
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

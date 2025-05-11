import React from "react";
import { Date, SectionHeading } from "./home.styled";
import Image from "next/image";
import { StyledLatestCard, Title, Wrapper } from "@/ui/home/trending-section.styled";
import { formatDateToReadable } from "@/utils/helper/dateFormater";


const LatestCard = ({data}) => {
  return (
    <StyledLatestCard href={`/news/trending/${data?._id}`}>
      <Image
        width={100}
        height={100}
        src={data?.image}
        alt={data?.name}
      />
      <div className="text-wrapper">
        <Title className="title">
          {data?.name || "--"}
        </Title>
        <Date>{formatDateToReadable(data?.publish_date)}</Date>
      </div>
    </StyledLatestCard>
  );
};

const TrendingSection = ({data}) => {
  return (
    <Wrapper>
        <SectionHeading>Trending News</SectionHeading>
        <div className="card-wrapper">
          {data?.map((item, index)=> <LatestCard key ={item?._id} data={item}/>)}
        </div>
    </Wrapper>
  );
};

export default TrendingSection;

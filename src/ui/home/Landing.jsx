import React from "react";
import { Container } from "react-bootstrap";
import {
  Tag,
  MainNews,
  SectionHeading,
  Title,
  Wrapper,
} from "./home.styled";
import Image from "next/image";
import TrendingSection from "./TrendingSection";
import { formatDateToReadable } from "@/utils/helper/dateFormater";


const Landing = ({ data, trending }) => {
  return (
    <Container>
      <Wrapper>
        <div className="breaking-news">
          <SectionHeading>Breaking News</SectionHeading>
          <MainNews href={`/news/trending/${data?._id}`}>
            <Image
              width={600}
              height={300}
              src={data?.image ? data?.image: null}
              alt={data?.name}
            />
            <div className="category-wrapper">
              {data?.tags?.length > 0 &&
                data?.tags?.map((item, index) => (
                  <Tag key={item?.name + index}> {item?.name}</Tag>
                ))}
            </div>

            <Title className="heading">{data?.name}</Title>
            <p className="description">
              {formatDateToReadable(data?.publish_date)}
            </p>
          </MainNews>
        </div>
        <TrendingSection data={trending} />
      </Wrapper>
    </Container>
  );
};

export default Landing;

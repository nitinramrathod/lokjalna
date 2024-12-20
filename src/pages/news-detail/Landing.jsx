import Image from "next/image";
import React from "react";
import { DetailHeading } from "../common/text.styled";
import Wrapper, { BackButton, Category, DetailWrapper } from "./news-detail.styled.";
import { back_icon } from "@/assets/icons/navigation.icon";
import { Date } from "../home/home.styled";

const Landing = ({data}) => {
  return (
    <Wrapper>
      <BackButton>{back_icon} Back to list</BackButton>

      <Category>
        Sport News
      </Category>

      <DetailHeading className="heading">
        {data?.name}
      </DetailHeading>
      <Date className="date">Sunday, 15 Dec 2024</Date>
      <Image
        className="landing-image"
        width={600}
        height={300}
        src={data?.image_url}
        alt={data?.name}
      />
      <DetailWrapper>
      {data?.long_description}
        </DetailWrapper>
    </Wrapper>
  );
};

export default Landing;

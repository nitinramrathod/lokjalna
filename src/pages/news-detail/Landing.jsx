import Image from "next/image";
import React from "react";
import { DetailHeading } from "../common/text.styled";
import Wrapper, {
  BackButton,
  Category,
  DetailWrapper,
} from "./news-detail.styled.";
import { back_icon } from "@/assets/icons/navigation.icon";
import { Date } from "../home/home.styled";
import { formatDateWithDay } from "@/utils/helper/dateFormater";
import Link from "next/link";


const Landing = ({ data }) => {
  console.log('data', data)
  return (
    <Wrapper>
      <BackButton>{back_icon} Back to list</BackButton>

      <Category>{data?.category?.name || "--"}</Category>

      <DetailHeading className="heading">{data?.name}</DetailHeading>
      <Date className="date"><Link href={`/news/author-news?author=${data?.author_name}`}> {data?.author_name}</Link> | {formatDateWithDay(data?.publish_date)}</Date>
      <Image
        className="landing-image"
        width={600}
        height={300}
        src={data?.image}
        alt={data?.name}
      />
      <DetailWrapper>
        <p className="short-description">{data?.short_description}</p>
        <div dangerouslySetInnerHTML={{ __html: data?.long_description }} />
        {/* <h3 className="author-name">-{data?.author_name}</h3> */}
      </DetailWrapper>
    </Wrapper>
  );
};

export default Landing;

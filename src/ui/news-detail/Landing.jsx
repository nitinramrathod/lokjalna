import Image from "next/image";
import React from "react";
import { DetailHeading } from "../common/text.styled";
import {
  BackButton,
  Wrapper,
  Category,
  DetailWrapper,
} from "./news-detail.styled.";
import { back_icon } from "@/assets/icons/navigation.icon";
import { Date, Tag } from "../home/home.styled";
import { formatDateWithDay } from "@/utils/helper/dateFormater";
import Link from "next/link";


const Landing = ({ data }) => {
  return (
    <Wrapper>
      <BackButton>{back_icon} Back to list</BackButton>

      <Category>{data?.category?.name || "--"}</Category>

      <DetailHeading className="heading">{data?.name}</DetailHeading>
      <Date className="date">Updated: <Link href={`/news/author-news?author_id=${data?.publisher._id}&name=${data?.publisher?.name}`}> {data?.publisher?.name}</Link> | {formatDateWithDay(data?.publish_date)}</Date>
      <Image
        className="landing-image"
        width={600}
        height={300}
        src={data?.image ? data?.image : null}
        alt={data?.name}
      />
      <DetailWrapper>
        <p className="short-description">{data?.short_description}</p>
        <div dangerouslySetInnerHTML={{ __html: data?.long_description }} />
        <div className="category-wrapper">
          Tags: {data?.tags?.length > 0 &&
            data?.tags?.map((item, index) => (
              <Tag key={item?.name + index}> {item?.name}</Tag>
            ))}
        </div>
      </DetailWrapper>
    </Wrapper>
  );
};

export default Landing;

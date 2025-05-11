"use client";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Container } from "react-bootstrap";
import Image from "next/image";
import styled from "@emotion/styled";
import { Date, SectionHeading, Title } from "./home.styled";
import Link from "next/link";

import { formatDateToReadable } from "@/utils/helper/dateFormater";

const StyledCard = styled(Link)`
  text-decoration: none;
  img {
    width: 100%;
    height: auto;
  }

  .text-wrapper {
    margin-top: 20px;
  }

  &:hover {
    .title {
      color: orange;
    }
  }
`;
const Wrapper = styled.section`
  margin-bottom: 60px;
  .swiper-horizontal {
    padding-bottom: 40px;
  }

  .swiper-pagination {
    display: flex;
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 5px;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;

    &.swiper-pagination-bullet-active {
      width: 30px;
      background: orange;
    }
  }

  @media (min-width: 1200px) {
    margin-bottom: 80px;
  }
`;

const Card = ({data}) => {
  return (
    <StyledCard href={`/news/top-stories/${data?._id}`}>
      <Image
        width={100}
        height={100}
        src={data?.image}
        alt={data?.name}
      />
      <div className="text-wrapper">
        <Title className="title">
        {data?.name}
        </Title>
        <Date>{formatDateToReadable(data?.publish_date)}</Date>
      </div>
    </StyledCard>
  );
};

const SliderSection = ({ section_name = "no name", data }) => {
  return (
    <Wrapper>
      <Container>
        <SectionHeading>{section_name}</SectionHeading>
        <Swiper
          spaceBetween={30}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            768: {
              slidesPerView: 2,
              //   spaceBetween: 40,
            },
            992: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={item?._id}>
              <Card data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Wrapper>
  );
};

export default SliderSection;

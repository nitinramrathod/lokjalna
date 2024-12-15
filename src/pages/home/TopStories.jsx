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
    .title{
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

const Card = () => {
  return (
    <StyledCard href={"/news/top-stories/detail"}>
      <Image
        width={100}
        height={100}
        src="/images/image-placeholder.webp"
        alt="landing image"
      />
      <div className="text-wrapper">
        <Title className="title">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam veri
          voluptate reiciendis?
        </Title>
        <Date>14th Dec 2024</Date>
      </div>
    </StyledCard>
  );
};

const TopStories = ({ section_name = "no name" }) => {
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
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Wrapper>
  );
};

export default TopStories;

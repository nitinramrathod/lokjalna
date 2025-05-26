"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Container } from "react-bootstrap";
import styled from "@emotion/styled";
import { SectionHeading } from "./home.styled";
import { Card } from "./SliderSection";

const Wrapper = styled.section`
  margin-bottom: 60px;

  .card-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 80px;
  }
`;

const CardsSection = ({ section_name = "no name", data }) => {
  return (
    <Wrapper>
      <Container>
        <SectionHeading>{section_name}</SectionHeading>
        <div className="card-wrapper">
          {data?.map((item, index) => (
            <Card key={item?._id + index} data={item} />
          ))}
        </div>
      </Container>
    </Wrapper>
  );
};

export default CardsSection;

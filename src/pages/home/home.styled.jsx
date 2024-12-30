"use client";

import { css } from "@emotion/react";
import { truncate2line } from "../common/text.styled";
import Link from "next/link";

const { default: styled } = require("@emotion/styled");



const Wrapper = styled.section`
  @media (min-width: 1200px) {
    display: flex;
    gap: 40px;

    .breaking-news {
      flex: 1.7;
    }
  }
`;

const Category = styled.p`
  margin: 0;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 11px;
  padding: 2px 7px;
  text-transform: uppercase;
  background: #f5f5f5;
`;

const titleTextStyles = css`
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  transition: all .5s ease;
  color: #424242;


  &:hover{
    color: orange;
  }

  @media (min-width: 1200px) {
    font-size: 20px;
    line-height: 26px;
  }
`

const Title = styled.h3`
  ${titleTextStyles}
  ${truncate2line}
`;

const Date = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  color: #494949;
`;

const MainNews = styled(Link)`
  margin-top: 30px;
  text-decoration: none;
  color: #323232;

  img {
    width: 100%;
    height: auto;
  }
  .category-wrapper {
    padding: 10px 0;
    display: flex;
    gap: 10px;
  }

  &:hover {
    .heading{
      color: orange;
    }
  }
`;

const StyledNavWrapper = styled.section`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  margin-bottom: 40px;
  padding-bottom: 10px;
`;

const StyledNavigationBox = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px;
  min-width: 295px;
  background: #e8e8e86b;
  transition: all 0.5s ease-in;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  .description {
    margin: 0;
    font-size: 14px;
    ${truncate2line}
  }
  .title {
    font-size: 16px;
    ${truncate2line}
  }

  &:hover {
    background: #e3e3e3;
  }

  @media (min-width: 1200px) {
    min-width: 250px;
    gap: 20px;
    padding: 10px;
  }
`;

const SectionHeading = styled.h2`
  font-size: 26px;
  border-left: 5px solid orange;
  padding-left: 10px;
  color: #393939;
  line-height: 30px;
  font-weight: 600;
  margin-bottom: 20px;

  @media (min-width: 1200px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

export default Wrapper;

export {
  Wrapper,
  StyledNavWrapper,
  Title,
  Date,
  SectionHeading,
  Category,
  StyledNavigationBox,
  MainNews,
  titleTextStyles,
};

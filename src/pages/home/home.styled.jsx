"use client";

const { default: styled } = require("@emotion/styled");

const Wrapper = styled.section`
  .landing-nav-wrapper {
    display: flex;
    gap: 20px;
    width: 100%;
    /* background: #f2f2f2; */
    overflow-x: auto;
    padding: 10px;
    margin-bottom: 60px;
  }
`;

const Category = styled.p`
  margin: 0;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 13px;
  padding: 3px 7px;
  text-transform: uppercase;
`;

const MainNews = styled.div`
margin-top: 30px;
  img {
    width: 100%;
    height: auto;
  }
  .category-wrapper {
    padding: 10px 0;
    display: flex;
    gap: 15px;
  }
  .heading {
    font-size: 18px;
    line-height: 24px;
    display: -webkit-box; /* Establish a flexbox container for multiline support */
    -webkit-line-clamp: 2; /* Specify the number of lines to show */
    -webkit-box-orient: vertical; /* Specify the orientation for the box layout */
    overflow: hidden; /* Hide overflowing content */
    text-overflow: ellipsis;
  }

  @media (min-width: 1200px) {
    .heading {
      font-size: 26px;
      line-height: 32px;
    }
  }
`;

const StyledNavigationBox = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px;
  min-width: 230px;
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
  }
  .title {
    font-size: 16px;
  }

  &:hover {
    background: #e3e3e3;
  }
`;

const SectionHeading = styled.h2`
  font-size: 22px;
  border-left: 5px solid orange;
  padding-left: 10px;
  color: #393939;
  line-height: 26px;
  font-weight: 600;

  @media screen {
    font-size: 32px;
    line-height: 38px;
  }
`;

export default Wrapper;

export { Wrapper, SectionHeading, Category, StyledNavigationBox, MainNews };

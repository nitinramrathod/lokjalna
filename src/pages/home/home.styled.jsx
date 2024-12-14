"use client";

const { default: styled } = require("@emotion/styled");

const Wrapper = styled.section`
  .landing-nav-wrapper {
    display: flex;
    gap: 20px;
    width: 100%;
    background: #f2f2f2;
    overflow-x: auto;
    padding: 10px;
    /* border-radius: 10px; */
    margin-bottom: 50px;
  }

  .bottom-news{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 50px;
  }
`;

const Category = styled.p`
  margin: 0;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 13px;
  padding: 3px 7px;
`;

const MainNews = styled.div`
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
  }
`;

const StyledNavigationBox = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px;
  min-width: 230px;
  background: #e8e8e8;
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
    background: #c0c0c0;
  }
`;

const SectionHeading = styled.h2`
    font-size: 22px;
    border-left: 5px solid orange;
    padding-left: 10px;
    color: #393939;
`
const StyledLatestCard = styled.div`
  display: flex;
  gap: 20px;
  padding: 5px;
  min-width: 230px;
  transition: all 0.5s ease-in;

  img {
    width: 130px;
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
   
    .title{
        color: #f8633a;
        text-decoration: underline;
    }
  }
`;

export default Wrapper;

export { Wrapper, SectionHeading, Category, StyledLatestCard, StyledNavigationBox, MainNews };

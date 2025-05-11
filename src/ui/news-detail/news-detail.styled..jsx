"use client";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

const Wrapper = styled.div`
  .landing-image {
    width: 100%;
    height: auto;
  }
  .heading {
    margin-bottom: 10px;
  }

  .date {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const StyledBackButton = styled.button`
  border: none;
  text-align: center;
  text-decoration: none;
  background: transparent;
  font-size: 14px;
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: 500;
  color: orange;
  svg path {
    fill: orange;
  }
`;
const Category = styled.h2`
  text-align: center;
  text-decoration: none;
  background: transparent;
  font-size: 14px;
  background: #59eb85;
  padding: 5px 15px;
  border-radius: 25px;
  margin: 20px auto;
  width: fit-content;
`;
const DetailWrapper = styled.article`
  text-align: left;
  text-decoration: none;
  background: transparent;
  font-size: 16px;
  line-height: 26px;
  padding: 5px 15px;
  border-radius: 25px;
  letter-spacing: 0.3px;
  margin: 20px auto;
  width: fit-content;
  max-width: 800px;

  .short-description {
    font-weight: 600;
    font-size: 18px;
    font-style: italic;
  }
  .author-name {
    font-weight: 700;
    text-align: end;
    font-size: 18px;
  }

  .category-wrapper{
    display: flex;
    gap: 10px;
    align-items: center;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 36px;

    .short-description {
      font-size: 20px;
    }
  }
`;

const BackButton = ({ children }) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };
  return <StyledBackButton onClick={handleClick}>{children}</StyledBackButton>;
};

export default Wrapper;
export { BackButton, DetailWrapper, Wrapper, Category };

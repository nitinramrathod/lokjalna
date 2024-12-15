"use client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

const Wrapper = styled.section`
  .landing-image {
    width: 100%;
    height: auto;
  }
  .heading {
    margin-bottom: 10px;
  }

  .date{
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
  svg path{
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
  line-height: 24px;
  padding: 5px 15px;
  border-radius: 25px;
  margin: 20px auto;
  width: fit-content;
  max-width: 800px;

  @media (min-width: 1200px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

const BackButton = ({children})=>{
    const router = useRouter()

    const handleClick = ()=>{
        router.back()
    }
    return (
        <StyledBackButton onClick={handleClick}>{children}</StyledBackButton>
    )
}

export default Wrapper;
export { BackButton, DetailWrapper, Category };
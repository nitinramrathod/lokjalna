"use client";

import { truncate3line } from "../common/text.styled";
import { titleTextStyles } from "./home.styled";
import Link from "next/link";



const { default: styled } = require("@emotion/styled");

const StyledLatestCard = styled(Link)`
  display: flex;
  gap: 20px;
  padding: 5px;
  min-width: 230px;
  transition: all 0.5s ease-in;
  text-decoration: none;

  img {
    width: 140px;
    object-fit: cover;
    aspect-ratio: 2/1.15;
    height: auto;
  }

  &:hover{
    .title{
      color: orange;
      text-decoration: underline;
    }
  }
`;

const Title = styled.h3`

${truncate3line}
${titleTextStyles}
`;

const Wrapper = styled.section`
  margin: 60px 0;

  .card-wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 30px;
  }

  @media (min-width: 1200px) {
    margin: 0;
    flex: 1;
  }
`;

export default Wrapper;
export { Wrapper, Title, StyledLatestCard };
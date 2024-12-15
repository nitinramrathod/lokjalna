"use client";

import { truncate3line } from "../common/text.styled";
import { titleTextStyles } from "./home.styled";
import Link from "next/link";



const { default: styled } = require("@emotion/styled");

const StyledLatestCard = styled.a`
  display: flex;
  gap: 20px;
  padding: 5px;
  min-width: 230px;
  transition: all 0.5s ease-in;
  text-decoration: none;

  img {
    width: 130px;
    object-fit: cover;
  }

  &:hover{
    .title{
      color: orange;
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

export default StyledLatestCard;
export { Wrapper, Title, StyledLatestCard };
// export default Wrapper;

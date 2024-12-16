"use client";

import styled from "@emotion/styled";
import Link from "next/link";

const Wrapper = styled.footer`
  background: #001816e8;
  padding: 20px 0;
  border-top: 1px solid #e87f00;

  .logo{
    width: 100%;
    max-width: 250px;
    height: auto;
    margin: 20px auto;
    margin-bottom: 50px;
    display: block;
  }

  .link-wrapper {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 50px;
  }
`;

const BottomLinks = styled(Link)`
  color: aliceblue;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  border-bottom: 1px solid #f0f8ff63;
  transition: all 0.3s ease;

  &:hover {
    color: orange;
    border-color: orange;
  }
`;
const TermAndCondition = styled.h3`
  display: flex;
  justify-content: space-between;
  a {
    color: white;
    font-size: 14px;
    text-decoration: underline;
    transition: all 0.3s ease;
    &:hover {
      color: #ffcc66;
    }
  }
`;

export default Wrapper;

export { BottomLinks, TermAndCondition };

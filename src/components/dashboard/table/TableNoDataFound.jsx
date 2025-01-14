"use client";

import React from "react";
import styled from "@emotion/styled";

import image from "@/assets/images/not-found-image.webp"
import Image from "next/image";

const Td = styled.td`
  text-align: center;
  padding: 20px 10px;
  height: 70vh;
  position: relative;
  background: #f0f0f0 !important;

  h3{
    font-size: 24px;
    margin-bottom: 0;
    color: #2e2e2e;
  }

  img{
    max-width: 250px;
    height: auto;
  }
`;

const TableNoDataFound = ({ columns = 5 }) => {
  return (
    <tr>
      <Td colSpan={columns}>
        <Image src={image} alt="Data Not Found!"/>
        <h3>Data Not Found!</h3>
      </Td>
    </tr>
  );
};

export default TableNoDataFound;

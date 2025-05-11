"use client";

import React from "react";
import styled from "@emotion/styled";

const Tr = styled.tr`
  td {
    padding: 20px 10px;
    position: relative; /* Ensure relative positioning for the loader */
    background: #f0f0f0 !important; /* Base background color for the loader */
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      animation: shimmer 1.5s infinite;
      z-index: 1;
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const TableLoader = ({ rows = 16, columns = 5 }) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr key={`tr-${rowIndex}`}>
          {Array.from({ length: columns }).map((_, colIndex) => (
            <td key={`td-${rowIndex}-${colIndex}`}></td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default TableLoader;

'use client'
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const truncate2line = css`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const truncate3line = css`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DetailHeading = styled.h1`
  font-size: 20px;
  line-height: 24px;
  color: #2d2d2d;
  font-weight: 600;
  text-align: center;

  @media (min-width: 1200px) {
    font-size: 32px;
    line-height: 36px;

    
  }
`;


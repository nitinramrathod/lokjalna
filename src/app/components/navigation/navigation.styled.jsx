"use client";

import styled from "@emotion/styled";

const Wrapper = styled.nav`
  padding: 10px 0;
`;

const TopNav = styled.div`
  display: flex;
  border-top: 0.5px solid black;
  border-bottom: 0.5px solid black;
  padding: 10px 0;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
  .today-date {
    font-size: 14px;
    margin: 0;
  }
`;

const GlobalSearch = styled.div`
  background: white;
  display: flex;
  align-items: center;
  padding: 3px 15px;
  border-radius: 35px;
  border: 1px solid black;

  input {
    border: none;
    outline: none;
  }
`;

export { Wrapper, TopNav, GlobalSearch };

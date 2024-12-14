"use client";

import styled from "@emotion/styled";

const Wrapper = styled.nav`
  padding: 10px 0;
  position: fixed;
  background: #ffffffca;
  width: 100%;
  top: 0;
  z-index: 2;
backdrop-filter: blur(10px);
  .top-navigation {
    padding: 5px 0;
    border-top: 0.5px solid gray;
    border-bottom: 0.5px solid gray;
  }
`;

const TopNav = styled.div`
  display: flex;
  /* padding: 10px 0; */
  gap: 30px;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 150px;
    height: 50px;
    object-fit: cover;
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

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
    width: 100px;
    height: 30px;
    object-fit: cover;
  }

  @media (min-width: 1200px) {
    .logo {
    width: 150px;
    height: 50px;
  }
  }
`;

const GlobalSearch = styled.div`
  background: white;
  display: flex;
  align-items: center;
  padding: 3px 15px;
  border-radius: 35px;
  border: 1px solid black;
  width: 40%;
  max-width: 500px;
  min-width: 195px;

  input {
    border: none;
    outline: none;
    width: calc(100% - 20px);
  }
`;

export { Wrapper, TopNav, GlobalSearch };

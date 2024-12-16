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
    border-top: 0.5px solid #d6d6d6ef;
    border-bottom: 0.5px solid #d6d6d6ef;
  }
`;

const TopNav = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: none;
    height: 30px;
    width: auto;
    object-fit: cover;

    &.short {
      display: block;
    }
  }

  @media (min-width: 1200px) {
    .logo {
      width: 150px;
      height: 50px;
      display: block;
      &.short {
      display: none;
    }
    }
  }
`;

const MenuButton = styled.button`
  border: none;
  background: transparent;

  @media (min-width: 1200px) {
    display: none;
    
  }
`;

const GlobalSearch = styled.div`
  background: white;
  display: flex;
  align-items: center;
  padding: 3px 15px;
  border-radius: 35px;
  border: 1px solid black;
  width: 70%;
  max-width: 500px;
  min-width: 240px;

  input {
    border: none;
    outline: none;
    width: calc(100% - 20px);
  }
`;

export { Wrapper, MenuButton, TopNav, GlobalSearch };

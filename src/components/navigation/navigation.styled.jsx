"use client";

import styled from "@emotion/styled";
import Link from "next/link";

const Wrapper = styled.nav`
  padding: 10px 0;
  position: fixed;
  background: #ffffffca;
  width: 100%;
  top: 0;
  z-index: 5;
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
    /* object-fit: cover; */

    &.short {
      display: block;
    }
  }

  .right-panel-wrapper{
    flex: 1;
    justify-content: end;
    display: flex;
    gap: 10px;
  }

  @media (min-width: 1200px) {
  .right-panel-wrapper{
    gap: 20px;
  }
    .logo {
      width: 150px;
      height: 50px;
      display: block;
      object-fit: contain;
      &.short {
      display: none;
    }
    }
  }
`;
const Avatar = styled(Link)`
width: 35px;
text-decoration: none;
height: 35px;
border-radius: 50%;
display: grid;
place-items: center;
color: #ffffff;
background: ${({bg})=> bg ? bg : '#ff802b'};
font-size: 14px;
/* border: 1px solid #646464; */

@media (min-width: 1200px) {
  width: 40px;
  height: 40px;
  font-size: 16px;
}
`

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
  border: 1px solid #ffa500;
  width: 70%;
  max-width: 500px;
  min-width: 210px;

  input {
    border: none;
    outline: none;
    width: calc(100% - 20px);
  }
`;

export { Wrapper, MenuButton, Avatar, TopNav, GlobalSearch };

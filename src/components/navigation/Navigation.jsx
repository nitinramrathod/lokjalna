"use client";
import React, { useEffect, useState } from "react";
import { TopNav, Wrapper, GlobalSearch, MenuButton, Avatar } from "./navigation.styled";
import { Container } from "react-bootstrap";
import {
  close_menu_icon,
  login_icon,
  open_menu_icon,
  search_icon,
} from "@/assets/icons/navigation.icon";
import Image from "next/image";
import logo from "@/assets/images/full-logo.png";
import short_logo from "@/assets/images/short-logo.png";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { usePathname } from "next/navigation";
import WebNavbar from "./WebNavbar";
import { getUser } from "@/utils/helper/localStorage";

const Navigation = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    let user = getUser();
    if(user){
      let temp = JSON.parse(user);
      temp.initial=  temp.name.charAt(0).toUpperCase()
      setUser(temp);
    }
    console.log('user', user)
    const handleRouteChange = () => {
      setShow(false);
    };

    handleRouteChange();
  }, [pathname]);

  return (
    <Wrapper>
      <div className="top-navigation">
        <Container>
          <TopNav>
            <Link href={"/"}>
              <Image className="logo" src={logo} alt="Lokjalna News"></Image>
              <Image
                className="logo short"
                src={short_logo}
                alt="Lokjalna News"
              ></Image>
            </Link>
            <div className="right-panel-wrapper">

            <GlobalSearch>
              <input type="text" placeholder="Search News" />
              {search_icon}
            </GlobalSearch>
            {user?.initial ? <Avatar title='Got to Dashboard' target="_blank" bg='#3cd9ff' href={'/dashboard/news'}>{user?.initial}</Avatar> : <Avatar title='Got to Login' target="_blank" href='/login'>{login_icon}</Avatar>}
            
            
            <MenuButton onClick={(e) => setShow(!show)}>
              {show ? close_menu_icon : open_menu_icon}
            </MenuButton>
            </div>
          </TopNav>
          <MobileNavbar show={show}></MobileNavbar>
        </Container>
      </div>
      <Container>
        <WebNavbar></WebNavbar>
      </Container>
    </Wrapper>
  );
};

export default Navigation;

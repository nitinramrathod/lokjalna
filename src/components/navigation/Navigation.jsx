"use client";
import React, { useEffect, useState } from "react";
import { TopNav, Wrapper, GlobalSearch, MenuButton } from "./navigation.styled";
import { Container } from "react-bootstrap";
import {
  close_menu_icon,
  open_menu_icon,
  search_icon,
} from "@/assets/icons/navigation.icon";
import Image from "next/image";
import logo from "@/assets/images/full-logo.png??v=2";
import short_logo from "@/assets/images/short-logo.png?v=2";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { usePathname } from "next/navigation";
import WebNavbar from "./WebNavbar";

const Navigation = () => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
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
            <GlobalSearch>
              <input type="text" placeholder="Search News" />
              {search_icon}
            </GlobalSearch>
            <MenuButton onClick={(e) => setShow(!show)}>
              {show ? close_menu_icon : open_menu_icon}
            </MenuButton>
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

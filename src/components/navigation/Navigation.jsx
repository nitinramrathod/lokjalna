"use client";
import React, { useEffect, useRef, useState } from "react";
import { TopNav, Wrapper, GlobalSearch, MenuButton, Avatar } from "./navigation.styled";
import { Container } from "react-bootstrap";
import { useRouter } from 'next/navigation';
import {
  close_menu_icon,
  login_icon,
  open_menu_icon,
  search_icon,
} from "@/assets/icons/navigation.icon";
import Image from "next/image";
import logo from "@/assets/images/full-logo.svg";
import short_logo from "@/assets/images/short-logo.svg";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { usePathname } from "next/navigation";
import WebNavbar from "./WebNavbar";
import { getUser } from "@/utils/helper/localStorage";
import { useSearchParams } from 'next/navigation'

const Navigation = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter()
  const searchInputRef = useRef();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get('query')

  useEffect(() => {
    let user = getUser();
    if (user) {
      let temp = JSON.parse(user);
      temp.initial = temp.name.charAt(0).toUpperCase()
      setUser(temp);
    }
    console.log('user', user)
    const handleRouteChange = () => {
      setShow(false);
    };

    handleRouteChange();
  }, [pathname]);

  const handleGlobalSearch = (e) => {
    let search = searchInputRef.current.value;

    if (search.trim()) {
      router.push(`/search?query=${encodeURIComponent(search)}`)
    } else {
      router.push(`/`)
    }
  }

  useEffect(() => {
    if(query){
      searchInputRef.current.value = query;
    }else{
      router.push(`/`)
    }
  }, [query])


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
                <input type="text" onKeyDown={(e) => { if (e.key === 'Enter') handleGlobalSearch() }} placeholder="Search News" ref={searchInputRef} />
                <button onClick={handleGlobalSearch}>{search_icon}</button>
              </GlobalSearch>
              {user?.initial ? <Avatar title='Got to Dashboard' target="_blank" bg='#3cd9ff' href={'/dashboard'}>{user?.image ? <Image src={user?.image} width={50} height={50} alt={user?.name} /> : user?.initial}</Avatar> : <Avatar title='Got to Login' target="_blank" href='/login'>{login_icon}</Avatar>}


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

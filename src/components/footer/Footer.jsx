import React from "react";
import Wrapper, { BottomLinks, TermAndCondition } from "./footer.styled";
import { Container } from "react-bootstrap";
import Link from "next/link";
import navigationLinks from "@/utils/constants/navigation-links.constant";
import Image from "next/image";
import logo from "@/assets/images/full-logo.png";


const Footer = () => {
  return (
    <Wrapper>
      <Container>
      <Image className="logo" src={logo} alt="Lokjalna News"></Image>

        <div className="link-wrapper">
          {navigationLinks?.map((link, index) => (
            <BottomLinks key={link?.href + index} href={link?.href}>
              {link?.name}
            </BottomLinks>
          ))}
        </div>
        <TermAndCondition>
          <Link href={"/privacy-policy"}>Privacy Policy</Link>
          <Link href={"/term-and-condition"}>Term and condition</Link>
        </TermAndCondition>
      </Container>
    </Wrapper>
  );
};

export default Footer;

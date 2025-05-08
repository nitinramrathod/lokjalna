import React from "react";
import Wrapper, {
  BottomLinks,
  MainContentWrapper,
  SocialMediaWrapper,
  TermAndCondition,
} from "./footer.styled";
import { Container } from "react-bootstrap";
import Link from "next/link";
import navigationLinks from "@/utils/constants/navigation-links.constant";
import Image from "next/image";
import logo from "@/assets/images/full-logo-white.svg";
import {
  facebook_icon,
  instagram_icon,
  whatsapp_icon,
  x_icon,
} from "@/assets/icons/social-media.icon";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <MainContentWrapper>
          <Image className="logo" src={logo} alt="Jalna Lokjyot News"></Image>

          <div className="link-wrapper">
            {navigationLinks?.map((link, index) => (
              <BottomLinks key={link?.href + index} href={link?.href}>
                {link?.name}
              </BottomLinks>
            ))}
          </div>

          <SocialMediaWrapper>
            <a href="/" target="_blank" rel="noopener noreferrer">
              {x_icon}
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              {facebook_icon}
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              {instagram_icon}
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              {whatsapp_icon}
            </a>
          </SocialMediaWrapper>
        </MainContentWrapper>

        <TermAndCondition>
          <Link href={"/privacy-policy"}>Privacy Policy</Link>
          <Link href={"/term-and-condition"}>Term and condition</Link>
        </TermAndCondition>
      </Container>
    </Wrapper>
  );
};

export default Footer;

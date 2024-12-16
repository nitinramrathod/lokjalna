"use client";

import styled from "@emotion/styled";
import Link from "next/link";

const Wrapper = styled.footer`
  background: #112b29;
  padding: 20px 0;
  border-top: 1px solid #e87f00;

  @media (min-width: 1200px) {
    padding-top: 60px;
    
  }

 
`;

const BottomLinks = styled(Link)`
  color: aliceblue;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #f0f8ff63;
  transition: all 0.3s ease;

  &:hover {
    color: orange;
    border-color: orange;
  }


  @media (min-width: 1200px){
    border: none;
  }
`;
const TermAndCondition = styled.h3`
  display: flex;
  justify-content: space-between;
  a {
    color: white;
    font-size: 12px;
    text-decoration: underline;
    transition: all 0.3s ease;
    &:hover {
      color: #ffcc66;
    }
  }
`;

const MainContentWrapper = styled.div`
 .logo {
    width: 100%;
    max-width: 250px;
    height: auto;
    margin: 20px auto;
    margin-bottom: 50px;
    display: block;
  }

  .link-wrapper {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 50px;
  }

@media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 400px;

    .logo{
        grid-column: 2/-1;
        grid-row: 1 / -1;
        margin-right: 0;
        margin-top: 0;
    }
    .link-wrapper{
        grid-row: 1/-1;
    }
    
}
    
`

const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-bottom: 30px;
  align-items: center;
  
  svg{
    width: 30px;
    height: 30px;
    transition: all .3s ease;
  }

  a:hover{
    svg{
        scale: 1.1;
    }

  }

  @media (min-width: 1200px){
    svg{
    width: 35px;
    height: 35px;
  }
    gap: 36px;
    justify-content: end;
    grid-column: 2/-1;
    grid-row: 1 / -1;
  }


`;


export default Wrapper;

export { BottomLinks, MainContentWrapper, SocialMediaWrapper, TermAndCondition };

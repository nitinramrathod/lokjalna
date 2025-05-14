"use client";
import styled from "@emotion/styled";
import Image from "next/image";
import short_logo from "@/assets/images/short-logo.svg";


const Wrapper = styled.section`
height: 100vh;
width: 100%;
display: grid;
place-content: center;
background: linear-gradient(45deg, #a3a3a3, #ffffff);
`

const Loader = () => {
    return (
        <Wrapper>
            <Image src={short_logo} alt="Jalna Lokjyot"/>          
        </Wrapper>
    )
}

export default Loader
"use client"
import React from 'react'
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import SidePanel from './SidePanel';

const Wrapper = styled.section`
display: flex;
gap: 20px;
`;
// const Wrapper = styled.section``;
const ResultWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 25px;
`;

const StyledSearchItem = styled.div`
display: flex;
gap: 20px;
.description{
    font-size: 14px;
}
.title{
    font-size: 18px;
}
img{
    width: 200px;
    aspect-ratio: 1.7/1;
    height: auto;
    object-fit: cover;
    border-radius: 7px;
}

`;

const StyledSidePanel = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
min-width: 170px;
`
const SearchCategory = styled.div`
padding: 10px;
background: #e5ecf5;
border-radius: 5px;

display: flex;
justify-content: space-between;

span{
   background: #84b2e6;
    aspect-ratio: 1;
    width: 25px;
    border-radius: 50%;
    font-size: 12px;

    display: grid;
    place-items: center;
    
}
`

const SearchItem = () => {
    return (
        <StyledSearchItem>
            <Image
                src={'/images/placeholders/avtar-placeholder.png'}
                alt={'Jalna Lokjyot'}
                width={200}
                height={250}
            />
            <div className="detail">
                <h2 className='title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolore?</h2>
                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolore?</p>
            </div>

        </StyledSearchItem>
    )
}


export {
    Wrapper,
    ResultWrapper,
    StyledSidePanel,
    SearchCategory
}
export default SearchItem
"use client"
import React from 'react'
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import SidePanel from './SidePanel';
import { formatDateWithDay } from '@/utils/helper/dateFormater';

const Wrapper = styled.section`
display: flex;
gap: 20px;
flex-direction: column;
padding-bottom: 50px;

@media (min-width: 1200px){
flex-direction: row;
padding-top: 30px;

}
`;
// const Wrapper = styled.section``;
const ResultWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 25px;
width: 100%;
`;

const StyledSearchItem = styled(Link)`
display: flex;
align-items: flex-start;
flex-direction: column;
gap: 20px;
border-bottom: 1px solid rgba(146, 146, 146, 0.562);
    padding-bottom: 20px;
    text-decoration: none;
    color: unset;

.description{
    font-size: 14px;
    margin-bottom: 0;
}
.title{
    font-size: 18px;
    transition: all .3s ease;
}
img{
    /* width: 200px; */
    width: 100%;
    aspect-ratio: 1.6/1;
    height: auto;
    object-fit: cover;
    border-radius: 7px;
}

&:hover{
    .title{
        color: #297ffd;
        text-decoration: underline;
    }
}

@media (min-width: 768px){
    flex-direction: row;
   img{
    width: 300px;
} 
}

`;

const StyledSidePanel = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
min-width: 170px;
overflow: auto;
margin-bottom: 20px;

@media (min-width: 1200px){
flex-direction: column;

}
`
const SearchCategory = styled.div`
padding: 5px 7px;
padding-left: 15px;
background: ${({active})=>active ? '#297ffd': '#e5ecf5'};
color: ${({active})=>active ? 'white': '#4d4d4d'};
border-radius: 20px;
gap: 10px;


display: flex;
justify-content: space-between;

span{
   background: #84b2e6;
    aspect-ratio: 1;
    width: 23px;
    border-radius: 50%;
    font-size: 12px;

    display: grid;
    place-items: center;
    
}
`

const SearchItem = ({data}) => {
    return (
        <StyledSearchItem href={`/news/search/${data?._id}`}>
            <Image
                src={data?.image || '/images/placeholder.png'}
                alt={data?.name}
                width={200}
                height={250}
            />
            <div className="detail">
                <h2 className='title'>{data?.name}</h2>
                <p className='description'>{data?.short_description}</p>
                <p className='description pt-2'>{data?.publisher?.name} | {formatDateWithDay(data?.publish_date)}</p>
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
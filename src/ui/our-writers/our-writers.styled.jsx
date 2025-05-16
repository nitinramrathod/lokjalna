'use client'
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

export const Section = styled.section`
  margin-bottom: 2rem;
`;
export const Wrapper = styled.section`
    margin-bottom: 5rem;
    padding-top: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.7rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  position: relative;
  padding-left: 15px;


  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 5px;
    height: 100%;
    background-color: #1a73e8;
  }
`;

export const WritersContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 3rem;
gap: 30px;
/* max-width: 768px; */
`
export const WriterBoxStyled = styled.div`
display: grid;
grid-template-rows: auto 1fr;
column-gap: 20px;
border-bottom: 1px solid #bac0c9;
padding-bottom: 10px;


img{
    width: 150px;
    aspect-ratio: 1/1.2;
    object-fit: cover;
    height: auto;
    border-radius: 10px;
    background: #e2e2e2;
}
.name{
    font-size: 24px;
    margin-bottom: 10px;
    display:inline-block;
}
.email{
    /* margin-bottom:0; */
    background: rgba(226, 226, 226, 0.445);
    border-radius: 5px;
    width: fit-content;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    gap: 5px;
   span{
    font-size: 18px;
    color: green;
   }

    

}
.description{
  font-size: 18px;
 display: grid;
 grid-template-columns: auto 1fr;
 column-gap: 5px;
 margin-bottom: 0;
 p{
  margin-bottom: 0;
 }

 span{
  margin-top: 3px;
 }
}


@media (min-width: 576px){
  grid-template-columns: auto 1fr;
}
`

export const Paragraph = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 2rem;
`;

export const Highlight = styled.span`
  font-weight: bold;
  color: #1a73e8;
`;


export const FounderSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  align-items: flex-start;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FounderImage = styled.div`
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
  width: 200px;
  height: 250px;
`;

export const FounderInfo = styled.div`
  flex-grow: 1;
`;

import React from 'react'

const WriterBox = ({ data: writer }) => {

  return (
    <WriterBoxStyled>
      <Image
        src={writer?.image || '/images/placeholders/avtar-placeholder.png'}
        alt={writer?.name || 'Jalna Lokjyot'}
        width={200}
        height={250}
      />
      <div className="detail-wrapper">
        <Link href={`/news/author-news?author=nitin-rathod`}><Highlight className='name'>{writer?.name || '--'} <span className="material-symbols-outlined text-success">
          link
        </span></Highlight></Link>
        <p className="email"><span className="material-symbols-outlined">
          alternate_email
        </span>{writer?.email || '--'}</p>
        <p className="description">
          <span className="material-symbols-outlined">
            shield_person
          </span> <p> {writer?.bio || 'No Bio Added'}</p>
        </p>
      </div>
    </WriterBoxStyled>
  )
}

export default WriterBox
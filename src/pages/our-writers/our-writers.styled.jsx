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
gap: 25px;
/* max-width: 768px; */
`
export const WriterBoxStyled = styled.div`
display: grid;
grid-template-columns: auto 1fr;
column-gap: 20px;


img{
    width: 150px;
    height: auto;
    border-radius: 10px;
}
.name{
    font-size: 24px;
    margin-bottom: 10px;
    display:inline-block;
}
.email{
    /* margin-bottom:0; */

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
                <Link href={`/news/author-news?author=nitin-rathod`}><Highlight className='name'>{writer?.name || '--'} <span class="material-symbols-outlined text-success">
link
</span></Highlight></Link>
                <p className="email">{writer?.email || '--'}</p>
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugiat doloribus ut fugit repellat? Pariatur, laudantium inventore, molestias recusandae soluta odio modi laboriosam debitis dolorem laborum tempora harum culpa beatae dolor repudiandae non porro numquam voluptates et.
                </p>
            </div>
        </WriterBoxStyled>
    )
}

export default WriterBox
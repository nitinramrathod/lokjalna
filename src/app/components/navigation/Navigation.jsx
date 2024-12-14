import React from 'react'
import { TopNav, Wrapper, GlobalSearch } from './navigation.styled'
import { Container } from 'react-bootstrap'
import { search_icon } from '@/assets/icons/navigation.icon'
import Image from 'next/image'
import logo from "@/assets/images/full-logo.png"
import Link from 'next/link'

const Navigation = () => {
  return (

    <Wrapper>
        <div className="top-navigation">

        <Container>
        <TopNav>
            <Link href={'/'}>
                <Image className='logo' src={logo} alt='Lokjalna News'></Image>
            </Link>
            <GlobalSearch>

            <input type="text" placeholder='Search News' />
            {search_icon}
            </GlobalSearch>
        </TopNav>
        </Container>
        </div>
    </Wrapper>
  )
}

export default Navigation
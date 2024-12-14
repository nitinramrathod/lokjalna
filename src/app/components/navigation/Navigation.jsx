import React from 'react'
import { TopNav, Wrapper, GlobalSearch } from './navigation.styled'
import { Container } from 'react-bootstrap'
import { search_icon } from '@/assets/icons/navigation.icon'

const Navigation = () => {
  return (
    <Wrapper>
        <Container>
        <TopNav>
            <h3 className='today-date'>
                Saturday, 14 Dec 2024
            </h3>
            <GlobalSearch>

            <input type="text" placeholder='Search News' />
            {search_icon}
            </GlobalSearch>
        </TopNav>
        </Container>
    </Wrapper>
  )
}

export default Navigation
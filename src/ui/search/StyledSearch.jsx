import React from 'react'
import SearchItem, { ResultWrapper, Wrapper } from './search.styled'
import SidePanel from './SidePanel'
import { Container } from 'react-bootstrap'


const StyledSearch = () => {
    return (
        <Container>

        <Wrapper>
            <SidePanel></SidePanel>
            <ResultWrapper>
                <SearchItem></SearchItem>
                <SearchItem></SearchItem>
            </ResultWrapper>
        </Wrapper>
        </Container>
    )
}

export default StyledSearch
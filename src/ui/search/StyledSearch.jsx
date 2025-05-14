import React from 'react'
import SearchItem, { ResultWrapper, Wrapper } from './search.styled'
import SidePanel from './SidePanel'
import { Container } from 'react-bootstrap'


const StyledSearch = ({query}) => {
    return (
        <Container>

        <Wrapper>
            <SidePanel/>
            <ResultWrapper>
                <h3 className='result-text'>124 Results for &quot;{query}&quot;</h3>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
            </ResultWrapper>
        </Wrapper>
        </Container>
    )
}

export default StyledSearch
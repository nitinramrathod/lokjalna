import React from 'react'
import { SearchCategory, StyledSidePanel } from './search.styled'

const SidePanel = ({newsCount}) => {
  return (
    <StyledSidePanel>
      <SearchCategory active={+true}>News <span>{newsCount}</span></SearchCategory>
      <SearchCategory>Articles <span>0</span></SearchCategory>
      <SearchCategory>Stories <span>0</span></SearchCategory>
      <SearchCategory>Study <span>0</span></SearchCategory>
    </StyledSidePanel>
  )
}

export default SidePanel
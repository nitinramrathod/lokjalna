import React from 'react'
import { SearchCategory, StyledSidePanel } from './search.styled'

const SidePanel = () => {
  return (
    <StyledSidePanel>
      <SearchCategory>News <span>78</span></SearchCategory>
      <SearchCategory>Articles <span>12</span></SearchCategory>
    </StyledSidePanel>
  )
}

export default SidePanel
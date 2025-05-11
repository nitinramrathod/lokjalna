import StyledSearch from '@/ui/search/StyledSearch';
import React from 'react'

const Search = ({searchParams }) => {
    const query = searchParams?.query || '';
  return (
   
    <StyledSearch/>
   
  )
}

export default Search
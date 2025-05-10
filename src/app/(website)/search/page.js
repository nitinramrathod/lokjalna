import React from 'react'

const Search = ({searchParams }) => {
    const query = searchParams?.query || '';
  return (
    <div>Search : {query}</div>
  )
}

export default Search
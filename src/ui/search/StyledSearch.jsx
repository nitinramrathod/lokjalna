'use client'
import React, { useEffect, useState } from 'react'
import SearchItem, { ResultWrapper, Wrapper } from './search.styled'
import SidePanel from './SidePanel'
import { Container } from 'react-bootstrap'
import { getNews } from '@/utils/services/news.services'
import ResponsiveSkeletonLoader from './Skeleton'


const StyledSearch = ({query}) => {

     const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);
        
    
        useEffect(() => {
            const fetchData = async () => {
                setLoading(true);
            try {
                const [newsRes] = await Promise.all([
                    getNews({name:query}),
                ]);
    
                setData(newsRes?.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
    
                console.error("Error fetching dropdown data:", error);
            }
        };

            fetchData();
        }, [query]);

       const LoaderUI = () => {
            return (<>
                <ResponsiveSkeletonLoader />
                <ResponsiveSkeletonLoader />
                <ResponsiveSkeletonLoader />
            </>
            )
        }

    return (
        <Container>

        <Wrapper>
            <SidePanel newsCount = {data?.length}/>
            <ResultWrapper>
                <h3 className='result-text'>124 Results for &quot;{query}&quot;</h3>
                {loading ? <LoaderUI/> : data?.length > 0 ? data.map((item, index) => (
                    <SearchItem key={index} data={item}/>
                )) : <div className='no-result'>No Result Found</div>}
                
            </ResultWrapper>
        </Wrapper>
        </Container>
    )
}

export default StyledSearch
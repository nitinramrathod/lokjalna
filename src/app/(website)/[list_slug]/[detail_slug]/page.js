import Landing from '@/pages/news-detail/Landing'
import { getNewsDetail } from '@/utils/services/services';
import React from 'react'
import { Container } from 'react-bootstrap'

export  const generateMetadata = async({params})=>{
    const { detail_slug } = params;
    const { data } = await getNewsDetail(detail_slug);
    return {
        title: data?.name,
        description: data?.short_description,
    }
}

const NewsDetail = async ({ params }) => {
    const { detail_slug } = params;
    const { data } = await getNewsDetail(detail_slug);
    return (
        <Container>
            <Landing data={data} />
        </Container>
    )
}

export default NewsDetail
import NewsDetailForm  from '@/pages/dashboard/news/NewsDetailForm'
import { getSingleNews } from '@/utils/services/homepage';
import React from 'react'
import { Container } from 'react-bootstrap'

const NewsDetail = async({params}) => {
    const {slug} = params;
    // const data = await getSingleNews(slug);

    // console.log('data', data)
    return (
        <Container>
            <NewsDetailForm />
        </Container>
    )
}

export default NewsDetail
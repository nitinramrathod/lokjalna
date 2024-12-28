import NewsDetailForm from '@/pages/dashboard/news/NewsDetailForm'
import { getSingleNews } from '@/utils/services/news.services';
import React from 'react'
import { Container } from 'react-bootstrap'

const NewsDetail = async ({ params }) => {
    const { slug } = params;
    let data
    try {
        data = await getSingleNews(slug);
        const formattedDate = new Date(data?.data?.publish_date).toISOString().split("T")[0];
        data = {...data?.data, publish_date: formattedDate}
        console.log("data", data);
    } catch (error) {
        console.log("error", error);
    }

    return (
        <Container>
            <NewsDetailForm defaultData={data} />
        </Container>
    )
}

export default NewsDetail
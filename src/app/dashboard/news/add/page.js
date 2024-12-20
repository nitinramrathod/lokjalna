import NewsDetailForm from '@/pages/dashboard/news/NewsDetailForm'
import React from 'react'
import { Container } from 'react-bootstrap'

const NewsDetail = () => {
    return (
        <Container>
            <NewsDetailForm defaultData='null' />
        </Container>
    )
}

export default NewsDetail
import Landing from '@/pages/news-detail/Landing'
import { getNewsDetail } from '@/utils/services/services';
import React from 'react'
import { Container } from 'react-bootstrap'

export const generateMetadata = async ({ params }) => {
    const { detail_slug } = params;
    const { data } = await getNewsDetail(detail_slug);
    return {
        title: data?.name,
        description: data?.short_description,

        openGraph: {
            type: "website",
            url: "https://jalnalokjyot.vercel.app",
            title: data?.name,
            description:
                data?.short_description,
            images: [
                {
                    url: data?.image,
                    width: 1200,
                    height: 630,
                    alt: data?.name,
                },
            ],
            siteName: "Jalna Lokjyot",
        },
        twitter: {
            card: "summary_large_image",
            site: "Jalna Lokjyot",
            title: data?.name,
            description: data?.short_description,
            images: [data?.image],
        },
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
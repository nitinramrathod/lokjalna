import SliderSection from '@/ui/home/SliderSection';
import Landing from '@/ui/news-detail/Landing'
import { getNews } from '@/utils/services/news.services';
import { getNewsDetail } from '@/utils/services/services';
import React from 'react'
import { Container } from 'react-bootstrap'

export const generateMetadata = async ({ params }) => {
    const { detail_slug } = await params;
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
    const { detail_slug } = await params;
    const { data } = await getNewsDetail(detail_slug);

    let relatedNews;
    try {
        relatedNews = await getNews();

    } catch (error) {
        console.log('error', error);
    }

    return (
        <Container>
            <Landing data={data} />
            <SliderSection data={relatedNews.data} section_name="Related News" />
        </Container>
    )
}

export default NewsDetail
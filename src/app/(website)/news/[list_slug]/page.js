import SliderSection from '@/ui/home/SliderSection'
import { getNews } from '@/utils/services/news.services';
import React from 'react'

const NewsList = async ({
  params,
  searchParams 
}) => {
  let data;
  const { list_slug } = params;
  const { author } = searchParams;
  try {
    data = await getNews();

  } catch (error) {
    console.log('error', error)

  }
  const trending = data?.data?.slice(1, 5)

  if (list_slug === "local-news") {
    return <div>{trending?.length > 0 && <SliderSection data={trending} section_name="Local News" />}</div>
  }
  if (list_slug === "author-news") {
    return <div>{trending?.length > 0 && <SliderSection data={trending} section_name={`Writer ${author}`} />}</div>
  }
  return <div>{trending?.length > 0 && <SliderSection data={trending} section_name="World News" />}</div>

}

export default NewsList
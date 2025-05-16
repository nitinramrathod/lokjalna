import SliderSection from '@/ui/home/SliderSection'
import { getNews } from '@/utils/services/news.services';
import React from 'react'

const NewsList = async ({
  params,
  searchParams 
}) => {
  let data;
  const { list_slug } = params;
  const { author_id, name } = searchParams;
  try {
    data = await getNews({publisher: author_id});

  } catch (error) {
    console.log('error', error)

  }
  const trending = data?.data;

  if (list_slug === "local-news") {
    return <div>{trending?.length > 0 && <SliderSection data={trending} section_name="Local News" />}</div>
  }
  if (list_slug === "author-news") {
    return <div>{trending?.length > 0 && <SliderSection data={trending} section_name={`Published By ${name}`} />}</div>
  }
  return <div>{trending?.length > 0 && <SliderSection data={trending} section_name="World News" />}</div>

}

export default NewsList
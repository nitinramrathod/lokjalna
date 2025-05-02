import TopStories from '@/pages/home/TopStories'
import { getNews } from '@/utils/services/news.services';
import React from 'react'

const NewsList = async ({
  params
}) => {
  let data;
  const { list_slug } = params;
  try {
    data = await getNews();

  } catch (error) {
    console.log('error', error)

  }
  const trending = data?.data?.slice(1, 5)

  if (list_slug === "local-news") {
    return <div>{trending?.length > 0 && <TopStories data={trending} section_name="Local News" />}</div>
  }
  return <div>{trending?.length > 0 && <TopStories data={trending} section_name="World News" />}</div>

}

export default NewsList
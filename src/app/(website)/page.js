import Landing from "@/pages/home/Landing";
import LandingNavigation from "@/pages/home/LandingNavigation";
import TopStories from "@/pages/home/TopStories";
import TrendingSection from "@/pages/home/TrendingSection";
import { getNews } from "@/utils/services/news.services";

export default async function Home() {
  let data;
  try {
     data = await getNews();
    
  } catch (error) {
    console.log('error', error)
    
  }

 const breaking = data?.data?.[0]
 const trending = data?.data?.slice(1, 5)
 const topStories = data?.data?.slice(5, 9)
 const localNews = data?.data?.slice(9, 13)
 const sportNews = data?.data?.slice(13, 17)

  return (
   <>
   <LandingNavigation></LandingNavigation>
   <Landing data={breaking} trending={trending}/> 
   
   {topStories?.length > 0 && <TopStories data={topStories} section_name="Top Stories"/>}
   {localNews?.length > 0 && <TopStories data={localNews} section_name="Local News"/>}
   {sportNews?.length > 0 && <TopStories data={sportNews} section_name="Sport News"/>}
   </>
  );
}

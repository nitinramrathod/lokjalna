import CardsSection from "@/ui/home/CardsSection";
import Landing from "@/ui/home/Landing";
import LandingNavigation from "@/ui/home/LandingNavigation";
import SliderSection from "@/ui/home/SliderSection";
import SEOJsonLd from "@/utils/helper/SEOJsonLd";
import { getNews } from "@/utils/services/news.services";

export default async function Home() {
  let data;
  try {
     data = await getNews();    
  } catch (error) {
    console.log('error', error);
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
   {topStories?.length > 0 && <CardsSection data={topStories} section_name="Top Stories"/>}
   {localNews?.length > 0 && <CardsSection data={localNews} section_name="Local News"/>}
   {sportNews?.length > 0 && <CardsSection data={sportNews} section_name="Sport News"/>}

   <SEOJsonLd
      type="WebSite"
      data={{
        name: 'Jalna Lokjyot News',
        url: 'https://jalnalokjyot.vercel.app/images/jalna-lokjyot.png',
        description: 'Trusted source for local and global news in Marathi and English.',
        publisher: {
          '@type': 'Organization',
          name: 'Jalna Lokjyot',
          logo: {
            '@type': 'ImageObject',
            url: 'https://jalnalokjyot.vercel.app/images/jalna-lokjyot.png',
          },
        },
      }}
    />  
   </>
  );
}

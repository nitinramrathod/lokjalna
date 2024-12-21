import Landing from "@/pages/home/Landing";
import LandingNavigation from "@/pages/home/LandingNavigation";
import TopStories from "@/pages/home/TopStories";
import TrendingSection from "@/pages/home/TrendingSection";
import { getNews } from "@/utils/services/news.services";


// export const metadata = {
//   title: "जालना लोकज्योत | सत्याची ज्योत, जालन्याचा आवाज!",
//   description:
//     "जालना लोकज्योत - सत्याची ज्योत आणि जालन्याचा आवाज! तुमच्या शहरातील सत्य, बातम्या आणि महत्त्वाच्या घडामोडींसाठी भेट द्या.",
//   keywords: [
//     "जालना",
//     "लोकज्योत",
//     "जालना बातम्या",
//     "सत्य बातम्या",
//     "मराठी बातम्या",
//     "जालन्याचा आवाज",
//     "स्थानीक बातम्या",
//     "Jalna Lokjyot",
//     "Jalna news",
//     "Marathi news",
//   ],
//   openGraph: {
//     type: "website",
//     url: "https://your-website-url.com",
//     title: "जालना लोकज्योत | सत्याची ज्योत, जालन्याचा आवाज!",
//     description:
//       "जालना लोकज्योत - सत्याची ज्योत आणि जालन्याचा आवाज! तुमच्या शहरातील सत्य, बातम्या आणि महत्त्वाच्या घडामोडींसाठी भेट द्या.",
//     images: [
//       {
//         url: "https://lokjalna.vercel.app/images/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "जालना लोकज्योत लोगो - सत्याची ज्योत, जालन्याचा आवाज!",
//       },
//     ],
//     siteName: "जालना लोकज्योत",
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@jalnalokjyot",
//     title: "जालना लोकज्योत | सत्याची ज्योत, जालन्याचा आवाज!",
//     description:
//       "जालना लोकज्योत - सत्याची ज्योत आणि जालन्याचा आवाज! तुमच्या शहरातील सत्य, बातम्या आणि महत्त्वाच्या घडामोडींसाठी भेट द्या.",
//     images: ["https://lokjalna.vercel.app/images/og-image.png"],
//   },
// };
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

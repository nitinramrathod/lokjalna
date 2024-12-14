import Landing from "@/pages/home/Landing";
import LandingNavigation from "@/pages/home/LandingNavigation";
import TopStories from "@/pages/home/TopStories";
import TrendingSection from "@/pages/home/TrendingSection";

export default function Home() {
  return (
   <>
   <LandingNavigation></LandingNavigation>
   <Landing></Landing>
   
   <TopStories section_name="Top Stories"/>
   <TopStories section_name="Local News"/>
   <TopStories section_name="Sport News"/>
   </>
  );
}

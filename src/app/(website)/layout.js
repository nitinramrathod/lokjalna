import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../../components/navigation/Navigation";
import Footer from "@/components/footer/Footer";



export const metadata = {
  title: {
    default: 'जालना लोकज्योत | सत्याची ज्योत, जालन्याचा आवाज!',
    template: '%s | जालना लोकज्योत',
    // absolute: '...',
  },
  description:
    "जालना लोकज्योत - सत्याची ज्योत आणि जालन्याचा आवाज! तुमच्या शहरातील सत्य, बातम्या आणि महत्त्वाच्या घडामोडींसाठी भेट द्या.",
  keywords: [
    "जालना",
    "लोकज्योत",
    "जालना बातम्या",
    "सत्य बातम्या",
    "मराठी बातम्या",
    "जालन्याचा आवाज",
    "स्थानीक बातम्या",
    "Jalna Lokjyot",
    "Jalna news",
    "Marathi news",
  ],
  openGraph: {
    type: "website",
    url: "https://jalnalokjyot.vercel.app",
    title: "जालना लोकज्योत | सत्याची ज्योत, जालन्याचा आवाज!",
    description:
      "जालना लोकज्योत - सत्याची ज्योत आणि जालन्याचा आवाज! तुमच्या शहरातील सत्य, बातम्या आणि महत्त्वाच्या घडामोडींसाठी भेट द्या.",
    images: [
      {
        url: "https://jalnalokjyot.vercel.app/images/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "जालना लोकज्योत लोगो - सत्याची ज्योत, जालन्याचा आवाज!",
      },
    ],
    siteName: "जालना लोकज्योत",
  },
  twitter: {
    card: "summary_large_image",
    site: "@jalnalokjyot",
    title: "जालना लोकज्योत | सत्याची ज्योत, जालन्याचा आवाज!",
    description:
      "जालना लोकज्योत - सत्याची ज्योत आणि जालन्याचा आवाज! तुमच्या शहरातील सत्य, बातम्या आणि महत्त्वाच्या घडामोडींसाठी भेट द्या.",
    images: ["https://jalnalokjyot.vercel.app/images/og-image-v2.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <div className='website-wrapper'>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

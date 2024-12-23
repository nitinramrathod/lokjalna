import localFont from "next/font/local";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../components/navigation/Navigation";
import Footer from "@/components/footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "जालना लोकज्योत | सत्याची ज्योत, जालन्याचा आवाज!",
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
    url: "https://your-website-url.com",
    title: "जालना लोकज्योत | सत्याची ज्योत, जालन्याचा आवाज!",
    description:
      "जालना लोकज्योत - सत्याची ज्योत आणि जालन्याचा आवाज! तुमच्या शहरातील सत्य, बातम्या आणि महत्त्वाच्या घडामोडींसाठी भेट द्या.",
    images: [
      {
        url: "https://lokjalna.vercel.app/images/og-image.png?v=2",
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
    images: ["https://lokjalna.vercel.app/images/og-image.png?v=2"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logos/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logos/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logos/favicon-16x16.png" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} main-body-tag`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

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
  title: 'Lokjalna - Voice of Jalna People',
  description: 'Lokjalna (लोकजालना) is the trusted news source for Jalna, Maharashtra, bringing you the latest local news, events, and updates.',
  keywords: 'Lokjalna, Jalna news, Maharashtra news, local news, breaking news, लोकजालना',
  authors: { name: 'Lokjalna Team', url: 'https://lokjalna.com' },
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
  robots: 'index, follow',
  openGraph: {
    title: 'Lokjalna - Voice of Jalna People',
    description: 'Stay informed with Lokjalna - Jalna’s most reliable news source. Local stories, events, and updates.',
    url: 'https://lokjalna.com',
    images: [
      {
        url: 'https://lokjalna.vercel.app/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lokjalna - Voice of Jalna People',
      },
    ],
    siteName: 'Lokjalna',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lokjalna - Voice of Jalna People',
    images: ['https://lokjalna.vercel.app/images/og-image.png'],
    description: 'Lokjalna (लोकजालना) brings you the latest news, stories, and updates from Jalna.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} main-body-tag`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

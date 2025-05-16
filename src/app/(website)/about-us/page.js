import AboutUs from '@/ui/about-us/AboutUs'
import SEOJsonLd from '@/utils/helper/SEOJsonLd'
import React from 'react'

const AboutUsPage = () => {
  return (
    <>
      <AboutUs />
      <SEOJsonLd
        type="AboutPage"
        data={{
          name: 'About Us - Jalna Lokjyot News',
          url: 'https://jalnalokjyot.vercel.app/about-us',
          description: 'Learn about the mission, team, and values of Jalna Lokjyot – your trusted Marathi and English news source.',
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
  )
}

export default AboutUsPage
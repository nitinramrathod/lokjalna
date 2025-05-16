import ContactUs from '@/ui/contact-us/ContactUs'
import SEOJsonLd from '@/utils/helper/SEOJsonLd'
import React from 'react'

const ContactUsPage = () => {
  return (
    <>
      <ContactUs />
      <SEOJsonLd
        type="ContactPage"
        data={{
          name: 'Contact Us - Jalna Lokjyot News',
          url: 'https://jalnalokjyot.vercel.app/contact-us',
          description: 'Get in touch with the Jalna Lokjyot team for inquiries, feedback, or collaborations.',
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

export default ContactUsPage
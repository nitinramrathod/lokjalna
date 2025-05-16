'use client';
import Head from 'next/head';

export default function SEOJsonLd({ type = 'WebPage', data }) {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': type,
            ...data,
          }),
        }}
      />
    </Head>
  );
}

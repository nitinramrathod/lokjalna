import OurWriters from '@/ui/our-writers/OurWriters'
import SEOJsonLd from '@/utils/helper/SEOJsonLd';
import { fetchUsers } from '@/utils/services/dashboard.services';

export const revalidate = 600;

const OurWritersPage = async () => {
  let users;
  try {
    users = await fetchUsers();

  } catch (error) {
    console.log('error', error);
  }
  return (
    <>
      <OurWriters data={users?.data?.data} />
      <SEOJsonLd
        type="WebPage"
        data={{
          name: 'Our Writers - Jalna Lokjyot News',
          url: 'https://jalnalokjyot.vercel.app/our-writers',
          description: 'Meet the journalists and contributors behind Jalna Lokjyot’s quality news content.',
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

export default OurWritersPage
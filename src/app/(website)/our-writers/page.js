import OurWriters from '@/ui/our-writers/OurWriters'
import { fetchUsers } from '@/utils/services/dashboard.services';

export const revalidate = 600;

const OurWritersPage =async () => {
   let users;
  try {
     users = await fetchUsers();
    
  } catch (error) {
    console.log('error', error);
  }
  return (
    <OurWriters data={users?.data?.data}/>
  )
}

export default OurWritersPage
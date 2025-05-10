import OurWriters from '@/pages/our-writers/OurWriters'
import { fetchUsers } from '@/utils/services/dashboard.services';
import React, { Suspense } from 'react'

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
"use client"
import React from 'react'
import { getToken } from './helper/localStorage'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

export const Auth = () => {
    const router =useRouter();
    
  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push('/login');
    }
  }, []);
  return (
    <div></div>
  )
}

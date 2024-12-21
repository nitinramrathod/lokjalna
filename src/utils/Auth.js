"use client"
import React from 'react'
import { getToken } from './helper/localStorage'
import { useRouter } from 'next/navigation'

export const Auth = () => {
    const router =useRouter();
    const token = getToken()
    if(!token){
        router.push('/login')
    }
  return (
    <div></div>
  )
}

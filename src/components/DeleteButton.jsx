"use client"
import { deleteNews } from '@/utils/services/news.services'
import React from 'react'
import { Button } from 'react-bootstrap'

const DeleteButton = ({id}) => {

    const handleDelete = async()=>{
        try {
            const response = await deleteNews(id);
            console.log('response', response)
            
        } catch (error) {
            console.log('error', error)
            
        }
    }
  return (
    <Button onClick={handleDelete} variant='danger' size="sm">Delete</Button>
  )
}

export default DeleteButton
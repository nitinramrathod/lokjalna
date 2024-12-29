"use client"
import Table from '@/components/dashboard/table/Table';
import DeleteButton from '@/components/DeleteButton';
import { fetchTags } from '@/utils/services/dashboard.services';
import { adminGetNews } from '@/utils/services/news.services';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'


const NEWS_HEADER = [
    "Sr. No.",
    "Name",
    "Id",
    "Created On"
]

const NewsList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const [categoryRes] = await Promise.all([
                    fetchTags(),
                ]);

                setData(categoryRes?.data?.data);
                setLoading(false);

            } catch (error) {
                setLoading(false);

                console.error("Error fetching dropdown data:", error);
            }
        };

        fetchData();
    }, [])



    return (<>
        <Table loading={loading} title="Tags List" header={NEWS_HEADER}>

            {data?.map((item, index) => (<tr key={item?._id}>
                <td>{index + 1}</td>
                <td>{item?.name || "--"}</td>
                <td>{item?._id}</td>
                <td>{new Date(item?.createdAt)?.toISOString()?.split("T")[0] || "--"}</td>

            </tr>))}

        </Table>


    </>
    )
}

export default NewsList
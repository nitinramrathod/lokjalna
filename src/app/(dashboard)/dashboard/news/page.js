"use client"

import Table from '@/components/dashboard/table/Table';
import DeleteButton from '@/components/DeleteButton';
import { adminGetNews } from '@/utils/services/news.services';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import {Dropdown, DropdownButton } from 'react-bootstrap'


const NEWS_HEADER = [
    "Sr. No.",
    "Title",
    "Author Name",
    "Publish Date",
    "Category",
    "Status",
    "Action",
]

const AddButton = {
    href: "/dashboard/news/add",
    text: "Add News",
};


const NewsList = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        const fetchData = async () => {
            try {
                const [categoryRes] = await Promise.all([
                    adminGetNews(),
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

    console.log('data', data)


    return (<>
        <Table
            loading={loading}
            addButton={AddButton}
            header={NEWS_HEADER}
        >

            {data?.map((item, index) => (<tr key={item?._id}>
                <td>{index + 1}</td>
                <td><Link href={`/dashboard/news/${item?._id}`}>{item?.name || "--"}</Link></td>
                <td>{item?.author_name || "--"}</td>
                <td>{new Date(item?.publish_date).toISOString().split("T")[0] || "--"}</td>
                <td>{item?.category?.name || "--"}</td>
                <td>{item?.status || "--"}</td>
                <td>
                    {/* <div className='d-flex gap-2'>

                        <DeleteButton id={item?._id} variant="danger" size='sm' >Delete</DeleteButton> <Button href={`/dashboard/news/${item?._id}`} as="a" variant="primary" size='sm' >Edit</Button>
                    </div> */}

                    <DropdownButton
                        as={'div'}
                        key={item?._id}
                        id={`dropdown-button-drop-${item?._id}`}
                        size="sm"
                        variant="secondary"
                        title="Actions"
                    >
                        <Dropdown.Item as={Link} href={`/dashboard/news/${item?._id}`} eventKey="3">Edit</Dropdown.Item>
                        <Dropdown.Item as="button" eventKey="1">Active</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item as={DeleteButton} id={item?._id} className='delete' eventKey="4">Delete</Dropdown.Item>
                    </DropdownButton>
                </td>
            </tr>))}

        </Table>


    </>
    )
}

export default NewsList
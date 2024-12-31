"use client"

import Table from '@/components/dashboard/table/Table';
import useAuth from '@/utils/helper/useAuth';
import { changeNewsStatus } from '@/utils/services/dashboard.services';
import { adminGetNews, deleteNews } from '@/utils/services/news.services';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'


const NEWS_HEADER = [
    {
        title: "Sr. No.",
        minWidth: "80px"
    },
    {
        title: "Title",
        minWidth: "300px"
    },
    {
        title: "Author Name",
        minWidth: "150px"
    },
    {
        title: "Publish Date",
        minWidth: "120px"
    },
    {
        title: "Category",
        minWidth: "140px"
    },
    {
        title: "Status.",
        minWidth: "90px"
    },
    {
        title: "Action.",
        minWidth: "90px"
    }
]

const AddButton = {
    href: "/dashboard/news/add",
    text: "Add News",
    type: "link"
};


const NewsList = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
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

    useEffect(() => {
        fetchData();
    }, [])

    const handleChangeStatus = (id, currentStatus) => {
        const status = currentStatus == "pending" ? 'active' : currentStatus == "inactive" ? 'active' : "inactive";
        changeNewsStatus(id, { status }).then(res => {
            console.log('res', res)
            fetchData();

        }).catch(err => {
            console.log('err', err)
        })

    }

    const handleDelete = async (id) => {
        try {
            const response = await deleteNews(id);
            fetchData();

        } catch (error) {
            console.log("error", error);
        }
    };

    const user = useAuth();
    const isAdmin = user?.role == 'admin';

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
                    <DropdownButton
                        as={'div'}
                        key={item?._id}
                        id={`dropdown-button-drop-${item?._id}`}
                        size="sm"
                        variant="secondary"
                        title="Actions"
                    >
                        <Dropdown.Item as={Link} href={`/dashboard/news/${item?._id}`} eventKey="3">Edit</Dropdown.Item>
                        {isAdmin && <><Dropdown.Item as="button" onClick={(e) => handleChangeStatus(item?._id, item?.status)} eventKey="1">{item?.status == "active" ? "Inactive" : "Active"}</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={() => handleDelete(item?._id)} className='delete' eventKey="4">Delete</Dropdown.Item>
                        </>}
                    </DropdownButton>
                </td>
            </tr>))}

        </Table>


    </>
    )
}

export default NewsList
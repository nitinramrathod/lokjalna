"use client"
import AddUser from '@/components/dashboard/AddUser';
import DeleteButton from '@/components/dashboard/common';
import Offcanvas from '@/components/dashboard/offcanvas/Offcanvas';
import Table from '@/components/dashboard/table/Table';
import { deleteUser, fetchUsers } from '@/utils/services/dashboard.services';
import React, { useEffect, useState } from 'react'

const NEWS_HEADER = [
    "Sr. No.",
    "Role",
    "Name",
    "Email",
    "Id",
    "Created On",
    "Action"
]

const NewsList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);

    const fetchData = async () => {
        try {
            const [categoryRes] = await Promise.all([
                fetchUsers(),
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

    const showCanvas = () => setShow(true);
    const hideCanvas = () => setShow(false);

    const addButton = {
        type: "button",
        text: "Create User",
        onClick: showCanvas
    }

    const handleDelete = (id) => {
        deleteUser(id).then(res => {
            console.log('res', res)
            fetchData();

        }).catch(err => {
            console.log('err', err)

        })
    }


    return (<>
        <Table
            addButton={addButton}
            loading={loading}
            title="Users List"
            header={NEWS_HEADER}
        >

            {data?.map((item, index) => (<tr key={item?._id}>
                <td>{index + 1}</td>
                <td>{item?.role || "--"}</td>
                <td>{item?.name || "--"}</td>
                <td>{item?.email || "--"}</td>
                <td>{item?._id || "--"}</td>
                <td>{new Date(item?.createdAt)?.toISOString()?.split("T")[0] || "--"}</td>
                <td className='text-center' onClick={(e)=>handleDelete(item?._id)}><DeleteButton /></td>
            </tr>))}

        </Table>


        <Offcanvas
            show={show}
            handleClose={hideCanvas}
            title='Create User'
        >
            <AddUser handleClose={hideCanvas} callback={fetchData} />
        </Offcanvas>


    </>
    )
}

export default NewsList
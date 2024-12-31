"use client"
import { trash_icon } from '@/assets/icons/dashboard.icon';
import AddTag from '@/components/dashboard/AddTag';
import DeleteButton from '@/components/dashboard/common';
import Offcanvas from '@/components/dashboard/offcanvas/Offcanvas';
import Table from '@/components/dashboard/table/Table';
import { deleteTag, fetchTags } from '@/utils/services/dashboard.services';
import React, { useEffect, useState } from 'react'

const TAGS_HEADER = [
    {
        title: "Sr. No.",
        minWidth: "70px"
    },
    {
        title: "Name",
        minWidth: "130px"
    },
    {
        title: "Id",
        minWidth: "90px"
    },
    {
        title: "Created On",
        minWidth: "130px"
    },
    {
        title: "Action.",
        minWidth: "90px"
    }
]

const NewsList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);

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

    useEffect(() => {
        fetchData();
    }, [])

    const showCanvas = () => setShow(true);
    const hideCanvas = () => setShow(false);

    const addButton = {
        type: "button",
        text: "Create Tag",
        onClick: showCanvas
    }

    const handleDelete = (id) => {
        deleteTag(id).then(res => {
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
            title="Tags List"
            header={TAGS_HEADER}
        >

            {data?.map((item, index) => (<tr key={item?._id}>
                <td>{index + 1}</td>
                <td>{item?.name || "--"}</td>
                <td>{item?._id}</td>
                <td>{new Date(item?.createdAt)?.toISOString()?.split("T")[0] || "--"}</td>
                <td className='text-center' onClick={(e)=>handleDelete(item?._id)}><DeleteButton /></td>
            </tr>))}

        </Table>


        <Offcanvas
            show={show}
            handleClose={hideCanvas}
            title='Create Category'
        >
            <AddTag handleClose={hideCanvas} callback={fetchData} />
        </Offcanvas>


    </>
    )
}

export default NewsList
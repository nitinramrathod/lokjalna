"use client"
import AddUser from '@/components/dashboard/AddUser';
import DeleteButton from '@/components/dashboard/common';
import Offcanvas from '@/components/dashboard/offcanvas/Offcanvas';
import Table from '@/components/dashboard/table/Table';
import { deleteUser, fetchUsers } from '@/utils/services/dashboard.services';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const USER_HEADER = [
    {
        title: "Sr. No.",
        minWidth: "70px"
    },
    {
        title: "Image",
        minWidth: "90px"
    },
      {
        title: "Name",
        minWidth: "130px"
    },
    {
        title: "Role",
        minWidth: "90px"
    },
  
    {
        title: "Email",
        minWidth: "90px"
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
        title: "Action",
        minWidth: "90px"
    }
]

const NewsList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [editId, setEditId] =useState(null);

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
    }, []);

    const showCanvas = () => setShow(true);
    const hideCanvas = () => {
        setShow(false);
        setEditId(null);
    };

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

    // Handle Edit 
    const handleEdit =(id)=>{
        setEditId(id);
        showCanvas();
    }


    return (<>
        <Table
            addButton={addButton}
            loading={loading}
            title="Users List"
            header={USER_HEADER}
            columns={7}
        >

            {data?.map((item, index) => (<tr key={item?._id}>
                <td>{index + 1}</td>
                <td><Image className='image' src={item?.image || '/images/placeholders/avtar-placeholder.png'} width={30} height={30} alt={item?.name}/></td>
                <td>{item?.name || "--"}</td>
                <td>{item?.role || "--"}</td>
                <td>{item?.email || "--"}</td>
                <td>{item?._id || "--"}</td>
                <td>{new Date(item?.createdAt)?.toISOString()?.split("T")[0] || "--"}</td>
                <td className='text-center'>
                    <DeleteButton type='EDIT' onClick={()=>handleEdit(item?._id)}/>
                    <DeleteButton type='DELETE'  onClick={(e)=>handleDelete(item?._id)} />
                    </td>
            </tr>))}

        </Table>


        <Offcanvas
            show={show}
            handleClose={hideCanvas}
            title='Create User'
        >
            <AddUser id={editId} handleClose={hideCanvas} callback={fetchData} />
        </Offcanvas>


    </>
    )
}

export default NewsList
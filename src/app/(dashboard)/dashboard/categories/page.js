"use client"
import AddCategory from '@/components/dashboard/AddCategory';
import Offcanvas from '@/components/dashboard/offcanvas/Offcanvas';
import Table from '@/components/dashboard/table/Table';
import { fetchCategories } from '@/utils/services/dashboard.services';
import React, { useEffect, useState } from 'react'

const NEWS_HEADER = [
    "Sr. No.",
    "Name",
    "Id",
    "Created On"
]

const CategoryList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);


    const fetchData = async () => {
        try {
            const [categoryRes] = await Promise.all([
                fetchCategories(),
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
        text: "Create Category",
        onClick: showCanvas
    }

    return (<>
        <Table
            loading={loading}
            title="Category List"
            header={NEWS_HEADER}
            addButton={addButton}
        >
            {data?.map((item, index) => (<tr key={item?._id}>
                <td>{index + 1}</td>
                <td>{item?.name || "--"}</td>
                <td>{item?._id}</td>
                <td>{new Date(item?.createdAt)?.toISOString()?.split("T")[0] || "--"}</td>
            </tr>))}

        </Table>

        <Offcanvas
            show={show}
            handleClose={hideCanvas}
            title='Create Category'
        >
            <AddCategory handleClose={hideCanvas} callback={fetchData} />
        </Offcanvas>
    </>
    )
}

export default CategoryList
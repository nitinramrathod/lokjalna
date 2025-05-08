"use client"
import { trash_icon } from '@/assets/icons/dashboard.icon';
import AddTag from '@/components/dashboard/AddTag';
import DeleteButton from '@/components/dashboard/common';
import Offcanvas from '@/components/dashboard/offcanvas/Offcanvas';
import Table from '@/components/dashboard/table/Table';
import { deleteSubmission, deleteTag, fetchSubmissions, fetchTags } from '@/utils/services/dashboard.services';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react'

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

gap: 20px;
padding-top: 10px;
`
const StatBox = styled.div`
padding: 15px 20px;
border-radius: 10px;
background: #ffffff;
    box-shadow: 0 0 15px rgba(104, 104, 104, 0.27);
    border: 1px solid rgba(255, 144, 80, 0.36);


p{
    font-size: 16px;
    margin-bottom: 0;
    color: gray;
}
span{
    font-size: 32px;
    font-weight: 500;
    color:rgb(86, 151, 235);
    margin-bottom: 0;
}
`
const NewsList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);

    const fetchData = async () => {
        try {
            const [categoryRes] = await Promise.all([
                fetchSubmissions(),
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
        deleteSubmission(id).then(res => {
            console.log('res', res)
            fetchData();

        }).catch(err => {
            console.log('err', err)

        })
    }


    return (<div className='p-3'>
        <h3>Dashboard</h3>

        <Wrapper>
           
                <StatBox>
                    <span>34</span>
                    <p>Total Users</p>
                </StatBox>
          
         
                <StatBox>
                    <span>34</span>
                    <p>Total News</p>
                </StatBox>
          
         
                <StatBox>
                    <span>34</span>
                    <p>Total Articles</p>
                </StatBox>
          
       
                <StatBox>
                    <span>34</span>
                    <p>Total Submission</p>
                </StatBox>
          


        </Wrapper>
    </div>
    )
}

export default NewsList
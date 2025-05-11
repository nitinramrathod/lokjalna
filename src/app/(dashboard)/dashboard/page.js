"use client"
import { trash_icon } from '@/assets/icons/dashboard.icon';
import AddTag from '@/components/dashboard/AddTag';
import DeleteButton from '@/components/dashboard/common';
import Offcanvas from '@/components/dashboard/offcanvas/Offcanvas';
import Table from '@/components/dashboard/table/Table';
import { deleteSubmission, deleteTag, fetchStats, fetchSubmissions, fetchTags } from '@/utils/services/dashboard.services';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react'

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));

gap: 20px;
padding-top: 10px;
`
const StatBox = styled.div`
padding: 10px;
border-radius: 10px;
background: #ffffff;
    box-shadow: 0 0 19px rgb(157 157 157 / 50%);
    display: grid;
    grid-template-columns: 50px auto;
    grid-template-rows: auto auto;
    /* gap:5px; */
    column-gap: 10px;
    /* border: 1px solid rgba(255, 144, 80, 0.36); */

    .icon{
     grid-row: 1/3;
     width: 100%;
     background:rgba(86, 151, 235, 0.1); 
     align-self: center;
     border-radius: 50%;
     display: flex;
     align-items: center;
     justify-content: center;
     aspect-ratio: 1; 
       color:rgb(86, 151, 235);
    }
    p{
        font-size: 14px;
        margin-bottom: 0;
        color: gray;
    }
    .count{
        line-height: 30px;

        margin-bottom: 0;
        font-size: 26px;
        font-weight: 500;
        color:rgb(86, 151, 235);
        margin-bottom: 0;
    }
`
const Dashboard = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const [stats] = await Promise.all([
                fetchStats(),
            ]);

            setData(stats?.data?.data);
            setLoading(false);

        } catch (error) {
            setLoading(false);

            console.error("Error fetching dropdown data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (<div className='p-3'>
        <h3>Dashboard</h3>

        <Wrapper>
            <StatBox>
                <span className="material-symbols-outlined icon">group</span>
                <span className="count">{data?.totalUsers || '--'}</span>
                <p>Total Users</p>
            </StatBox>
            <StatBox>
                <span className="material-symbols-outlined icon">group</span>

                <span className="count">{data?.totalNews || '--'}</span>
                <p>Total News</p>
            </StatBox>
            <StatBox>
                <span className="material-symbols-outlined icon">group</span>
                <span className="count">{data?.totalArticles || '--'}</span>
                <p>Total Articles</p>
            </StatBox>
            <StatBox>
                <span className="material-symbols-outlined icon">group</span>
                <span className="count">{data?.totalSubmissions || '--'}</span>
                <p>Total Submissions</p>
            </StatBox>
            <StatBox>
                <span className="material-symbols-outlined icon">group</span>

                <span className="count">{data?.totalTags || '--'}</span>
                <p>Total Tags</p>
            </StatBox>
            <StatBox>
                <span className="material-symbols-outlined icon">group</span>

                <span className="count">{data?.totalCategories || '--'}</span>
                <p>Total Categories</p>
            </StatBox>
        </Wrapper>
    </div>
    )
}

export default Dashboard
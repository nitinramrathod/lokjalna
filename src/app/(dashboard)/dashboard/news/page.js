import DeleteButton from '@/components/DeleteButton';
import { adminGetNews } from '@/utils/services/news.services';
import Link from 'next/link';
import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'

const NewsList = async () => {
    let data;
    try {
        data = await adminGetNews();
        console.log('data', data)
    } catch (error) {
        console.log('error', error)
    }


    return (
        <Container>
            <Table responsive bordered hover>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Title</th>
                        <th>Author Name</th>
                        <th>Publish Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data?.map((item, index) => (<tr key={item?._id}>
                        <td>{index + 1}</td>
                        <td><Link href={`/dashboard/news/${item?._id}`}>{item?.name || "--"}</Link></td>
                        <td>{item?.author_name || "--"}</td>
                        <td>{ new Date(item?.publish_date).toISOString().split("T")[0]|| "--"}</td>
                        <td>{item?.status || "--"}</td>
                        <td className='d-flex gap-2'><DeleteButton id={item?._id} variant="danger" size='sm' >Delete</DeleteButton> <Button href={`/dashboard/news/${item?._id}`} as="a" variant="primary" size='sm' >Edit</Button></td>
                    </tr>))}

                </tbody>
            </Table>
        </Container>
    )
}

export default NewsList
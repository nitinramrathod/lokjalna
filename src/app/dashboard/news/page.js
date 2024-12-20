import { getNews } from '@/utils/services/homepage';
import Link from 'next/link';
import React from 'react'
import { Container, Table } from 'react-bootstrap'

const NewsList = async() => {

    const {data} = await getNews();
    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Author Name</th>
                        <th>Publish Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, index)=>( <tr key={item._id}>
                        <td>{index+1}</td>
                        <td><Link href={`/dashboard/news/${item?._id}`}>{item?.name ||"--"}</Link></td>
                        <td>{item?.author_name ||"--"}</td>
                        <td>{item?.publish_date ||"--"}</td>
                    </tr>))}
                   
                </tbody>
            </Table>
        </Container>
    )
}

export default NewsList
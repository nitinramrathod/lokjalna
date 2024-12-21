"use client";

import { postNews, updateNews } from "@/utils/services/news.services";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const FormWrapper = styled.div`
  width: 900px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const NewsDetailForm = ({defaultData=''}) => {
  const [data, setData] = useState({...defaultData});
  const router = useRouter()
  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const saveNews = defaultData ? updateNews : postNews

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await saveNews(data, defaultData?._id);
      setData('')
      router.push('/dashboard/news');
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <Container className="py-5">
      <h2 className="pb-4">{defaultData ? "Update News": "Add News"}</h2>
      <Row className="mb-4">
        <Col sm="12">
          <Form.Label htmlFor="name">News Title</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            value={data?.name || ""}
            type="text"
            id="name"
            name="name"
            aria-describedby="passwordHelpBlock"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="6" className="mb-4">
          <Form.Label htmlFor="inputPassword5">Image URL</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            type="text"
            name="image_url"
            value={data?.image_url || ""}
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
        </Col>
        <Col sm="6" className="mb-4">
          <Form.Label htmlFor="inputPassword5">Location</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            type="text"
            name="location"
            value={data?.location || ""}
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="6" className="mb-4">
          <Form.Label htmlFor="inputPassword5">Publish Date</Form.Label>
          <Form.Control
            type="date"
            name="publish_date"
            value={data?.publish_date || ""}
            onChange={handleInputChange}
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
        </Col>
        <Col sm="6" className="mb-4">
          <Form.Label htmlFor="author_name">Author Name</Form.Label>
          <Form.Control
            type="text"
            name="author_name"
            value={data?.author_name || ""}
            onChange={handleInputChange}
            id="author_name"
            aria-describedby="passwordHelpBlock"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="6" className="mb-4">
          <Form.Label htmlFor="inputPassword5">Tags</Form.Label>

          <Form.Select name="tags" aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col sm="6" className="mb-4">
          <Form.Label htmlFor="inputPassword5">Category</Form.Label>

          <Form.Select name="category" aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col sm="12" className="mb-5">
          <Form.Label htmlFor="long_description">Description</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            rows={7}
            as="textarea"
            id="description"
            name="long_description"
            value={data?.long_description || ""}
            aria-describedby="passwordHelpBlock"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Button onClick={handleSubmit} variant="primary">
            {defaultData ? "Update" : "Save"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsDetailForm;

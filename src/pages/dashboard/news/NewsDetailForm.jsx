"use client";

import MultiSelect from "@/components/form/MultiSelect";
import SingleSelect from "@/components/form/SingleSelect";
import { clearToken } from "@/utils/helper/localStorage";
import { transformToOptions } from "@/utils/helper/transformToOptions";
import {
  fetchCategories,
  fetchTags,
} from "@/utils/services/dashboard.services";
import { postNews, updateNews } from "@/utils/services/news.services";
import styled from "@emotion/styled";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const FormWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  padding: 20px;
`;
const NewsDetailForm = ({ defaultData = "" }) => {
  const formattedData = {
    ...defaultData,
    tags: transformToOptions(defaultData?.tags),
    category: transformToOptions(defaultData?.category),
  };
  const [data, setData] = useState(formattedData);
  const router = useRouter();
  const [dropdownOptions, setDropdownOptions] = useState({});

  const saveNews = defaultData ? updateNews : postNews;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }

    if (data?.tags?.length > 0) {
      data.tags.forEach((tag, index) => {
        formData.append(`tags[${index}]`, tag.value); // Append as tags[0], tags[1], etc.
      });
    }

    if (data?.category) {
      formData.set("category", data?.category?.value);
    }

    try {
      const response = await saveNews(formData, defaultData?._id);
      setData("");
      router.push("/dashboard/news");
    } catch (error) {
      console.log("error", error);
      // clearToken();
    }
  };

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleDropdownChange = (e, name) => {
    console.log("e", e);
    setData((prev) => ({
      ...prev,
      [name]: e,
    }));
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoryRes, tagRes] = await Promise.all([
          fetchCategories(),
          fetchTags(),
        ]);

        setDropdownOptions((prev) => ({
          ...prev,
          categories: transformToOptions(categoryRes?.data?.data),
          tags: transformToOptions(tagRes?.data?.data),
        }));
      } catch (error) {
        console.error("Error fetching dropdown data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <FormWrapper>
        <h2 className="pb-4">{defaultData ? "Update News" : "Add News"}</h2>
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
          <Col sm="12" className="mb-5">
            <Form.Label htmlFor="short_description">Short Description</Form.Label>
            <Form.Control
              onChange={handleInputChange}
              rows={3}
              as="textarea"
              id="description"
              name="short_description"
              value={data?.short_description || ""}
              aria-describedby="passwordHelpBlock"
            />
          </Col>
        </Row>
        <Row>
          <Col sm="4" className="mb-4">
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
          <Col sm="4" className="mb-4">
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
          <Col sm="4" className="mb-4">
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
        </Row>
        <Row>
        <Col sm="4" className="mb-4">
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
          <Col sm="4" className="mb-4">
            <Form.Label htmlFor="inputPassword5">Tags</Form.Label>
            <MultiSelect
              defaultValue={data?.tags}
              onChange={(e) => handleDropdownChange(e, "tags")}
              options={dropdownOptions?.tags}
            />
          </Col>
          <Col sm="4" className="mb-4">
            <Form.Label htmlFor="inputPassword5">Category</Form.Label>
            <SingleSelect
              defaultValue={data?.category}
              onChange={(e) => handleDropdownChange(e, "category")}
              options={dropdownOptions?.categories}
            />
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
    </FormWrapper>
  );
};

export default NewsDetailForm;

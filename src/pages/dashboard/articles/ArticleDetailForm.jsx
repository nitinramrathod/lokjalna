"use client";

import Input from "@/components/form/Input";
import MultiSelect from "@/components/form/MultiSelect";
import SingleSelect from "@/components/form/SingleSelect";
import { transformToOptions } from "@/utils/helper/transformToOptions";
import {
  fetchCategories,
  fetchTags,
} from "@/utils/services/dashboard.services";
import { postNews, updateNews } from "@/utils/services/news.services";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";

const FormWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  padding: 20px;
`;
const ArticleDetailForm = ({ defaultData = "" }) => {
  const formattedData = {
    ...defaultData,
    tags: transformToOptions(defaultData?.tags),
    category: transformToOptions(defaultData?.category),
  };
  const [data, setData] = useState(formattedData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [dropdownOptions, setDropdownOptions] = useState({});

  const saveNews = defaultData ? updateNews : postNews;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

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

    saveNews(formData, defaultData?._id)
      .then((res) => {
        setData("");
        router.push("/dashboard/news");
        setLoading(false);
        setErrors("");
      })
      .catch((err) => {
        const errors = err.response.data.errors;
        setLoading(false);
        setErrors(errors);
      });
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
      <h2 className="pb-4">{defaultData ? "Update Article" : "Add Article"}</h2>
      <Row className="mb-4">
        <Col sm="12">
          <Input
            onChange={handleInputChange}
            value={data?.name || ""}
            type="text"
            id="name"
            name="name"
            label="Article Title"
            placeholder="Enter article title"
            error={errors?.name}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="12" className="mb-5">
          <Input
            onChange={handleInputChange}
            value={data?.short_description || ""}
            type="text"
            as="textarea"
            name="short_description"
            id="short_description"
            label="Short Description"
            placeholder="Enter Article Description"

            rows={3}
            error={errors?.name}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-4">
          <Input
            onChange={handleInputChange}
            value={data?.image_url || ""}
            type="text"
            id="image_url"
            name="image_url"
            label="Image URL"
            placeholder="Enter Image URL"
            error={errors?.image_url}
          />
        </Col>
        <Col sm="4" className="mb-4">
          <Input
            onChange={handleInputChange}
            value={data?.location || ""}
            type="text"
            id="location"
            name="location"
            label="Location"
            placeholder="Enter Location"
            error={errors?.location}
          />
        </Col>
        <Col sm="4" className="mb-4">
          <Input
            onChange={handleInputChange}
            value={data?.publish_date || ""}
            id="publish_date"
            name="publish_date"
            label="Publish Date"
            placeholder="Enter Publish Date"
            type="date"
            error={errors?.publish_date}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-4">
          <Input
            onChange={handleInputChange}
            value={data?.author_name || ""}
            id="author_name"
            name="author_name"
            label="Author Name"
            placeholder="Enter Author Name"
            error={errors?.author_name}
          />
        </Col>
        <Col sm="4" className="mb-4">
          <MultiSelect
            label="Tags"
            id="Tags"
            defaultValue={data?.tags}
            onChange={(e) => handleDropdownChange(e, "tags")}
            options={dropdownOptions?.tags}
            error={errors?.tags}
            placeholder="Select tags"
          />
        </Col>
        <Col sm="4" className="mb-4">
          <SingleSelect
            label="Category"
            id="Category"
            defaultValue={data?.category}
            onChange={(e) => handleDropdownChange(e, "category")}
            options={dropdownOptions?.categories}
            error={errors?.category}
            placeholder="Select category"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="12" className="mb-5">
          <Input
            onChange={handleInputChange}
            value={data?.long_description || ""}
            type="text"
            as="textarea"
            name="long_description"
            id="long_description"
            label="Description"
            placeholder="Enter Description"

            rows={7}
            error={errors?.long_description}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Button disabled={loading} className="px-5" onClick={handleSubmit} variant="primary">
            {loading ? <Spinner animation="border" size="sm" />: (defaultData ? "Update" : "Save")}
          </Button>
        </Col>
      </Row>
    </FormWrapper>
  );
};

export default ArticleDetailForm;

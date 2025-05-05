"use client";

import ImageInput from "@/components/form/ImageInput";
import Input from "@/components/form/Input";
import MultiSelect from "@/components/form/MultiSelect";
import RTEInput from "@/components/form/RTE";
import SingleSelect from "@/components/form/SingleSelect";
import { transformToOptions } from "@/utils/helper/transformToOptions";
import {
  fetchCategories,
  fetchTags,
} from "@/utils/services/dashboard.services";
import { postNews, updateNews } from "@/utils/services/news.services";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";

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
  const fileInputRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [dropdownOptions, setDropdownOptions] = useState({
    type:[{
      label:'News',
      value: 'news'
    },
    {
      label:'Article',
      value: 'article'
    }
  ]
  });

  const saveNews = defaultData ? updateNews : postNews;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
      if (key !== "tags" && key !== 'image') {
        formData.append(key, value);
      }
    }

    const file = fileInputRef.current.files[0];
    if (file) {
      formData.append('image', file);
    }

    if (data?.tags?.length > 0) {
      data.tags.forEach((tag, index) => {
        formData.append(`tags[${index}]`, tag.value); // Append as tags[0], tags[1], etc.
      });
    }

    if (data?.category) {
      formData.set("category", data?.category?.value);
    }
    if (data?.type) {
      formData.set("type", data?.type?.value);
    }

    saveNews(formData, defaultData?._id)
      .then((res) => {
        setData("");
        router.push("/dashboard/news");
        setLoading(false);
        setErrors("");
      })
      .catch((err) => {
        debugger;
        const errors = err?.response?.data?.errors;
        setLoading(false);
        setErrors(errors);
      });
  };

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleRTEChange = (value, name) => {    
    setData({ ...data, [name]: value });
  };

  const handleDropdownChange = (e, name) => {
    
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
          <Input
            onChange={handleInputChange}
            value={data?.name || ""}
            type="text"
            id="name"
            name="name"
            label="News Title"
            placeholder="Enter news title"
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
            placeholder="Enter Short Description"
            rows={3}
            error={errors?.name}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-4">
        <ImageInput
           type="file"
           id="image"
           name="image"
           label="Image"
           innerRef={fileInputRef}
           placeholder="Select Image"
           error={errors?.image}
           src={data.image}
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
          />
        </Col>
        <Col sm="4" className="mb-4">
          <SingleSelect
            label="Type"
            id="Type"
            defaultValue={data?.type}
            onChange={(e) => handleDropdownChange(e, "type")}
            options={dropdownOptions?.type}
            error={errors?.type}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="12" className="mb-5">
        <RTEInput
            onChange={handleRTEChange}
            value={data?.long_description || ""}
            name="long_description"
            id="long_description"
            label="Description"
            placeholder="Enter Description"
            error={errors?.long_description}
          />
          {/* <Input
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
          /> */}
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Button disabled={loading} className="px-5" onClick={handleSubmit} variant="primary">
            {loading ? <Spinner animation="border" size="sm" /> : (defaultData ? "Update" : "Save")}
          </Button>
        </Col>
      </Row>
    </FormWrapper>
  );
};

export default NewsDetailForm;

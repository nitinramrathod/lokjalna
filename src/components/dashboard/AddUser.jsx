import { postTag, postUser } from "@/utils/services/dashboard.services";
import React, { useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import SingleSelect from "../form/SingleSelect";
import Input from "../form/Input";

const AddUser = ({ callback, handleClose }) => {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    const formData = new FormData();
    setLoading(true);

    for (const [key, value] of Object.entries(data)) {
      if (value !== null && value !== undefined) {
        formData.append(key, value);
      }
    }

    if (data?.role?.value) {
      formData.set("role", data.role.value);
    }

    postUser(formData)
      .then((res) => {
        setLoading(false);
        setErrors("");
        if (callback) callback();
        if (handleClose) handleClose();
      })
      .catch((err) => {
        const errors = err.response.data.errors;
        setLoading(false);
        setErrors(errors);
        console.error("Error creating user:", err);
      });
  };

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleDropdownChange = (e, name) => {
    setData((prev) => ({
      ...prev,
      [name]: e,
    }));
  };

  const USER_ROLE = [
    { label: "Admin", value: "admin" },
    { label: "Publisher", value: "publisher" },
  ];

  return (
    <div>
      <Col className="pb-4">
        <Input
          onChange={handleInputChange}
          value={data?.name || ""}
          type="text"
          id="name"
          name="name"
          label="Name"
          placeholder="Enter Name"
          error={errors?.name}
        />
      </Col>
      <Col className="pb-4">
        <Input
          onChange={handleInputChange}
          value={data?.email || ""}
          type="email"
          id="email"
          name="email"
          label="Email"
          placeholder="Enter email"
          error={errors?.email}
        />
      </Col>
      <Col className="mb-4">
        <SingleSelect
          label={"Role"}
          defaultValue={USER_ROLE[1]}
          onChange={(e) => handleDropdownChange(e, "role")}
          options={USER_ROLE}
          error={errors?.role}
        />
      </Col>
      <Col className="mb-4">
        <Input
          onChange={handleInputChange}
          value={data?.password || ""}
          type="text"
          id="password"
          name="password"
          label="Password"
          placeholder="Enter password"
          error={errors?.password}
        />
      </Col>
      <Col className="mb-4">
        <Input
          onChange={handleInputChange}
          value={data?.confirm_password || ""}
          type="password"
          id="confirm_password"
          name="confirm_password"
          label="Confirm Password"
          placeholder="Enter confirm password"
          error={errors?.confirm_password}
        />
      </Col>

      <Button disabled={loading} onClick={handleSubmit} className="px-5 ">
        {loading ? <Spinner animation="border" size="sm" /> : "Save"}
      </Button>
    </div>
  );
};

export default AddUser;

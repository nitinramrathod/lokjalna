import { postTag, postUser } from "@/utils/services/dashboard.services";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import SingleSelect from "../form/SingleSelect";

const AddUser = ({ callback, handleClose }) => {
  const [data, setData] = useState({});

  const handleSubmit = () => {
    const formData = new FormData();
  
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
        console.log("User successfully created:", res);
        if (callback) callback();
        if (handleClose) handleClose();
      })
      .catch((err) => {
        console.error("Error creating user:", err);
        // Optionally, add user feedback here (e.g., toast notification)
      });
  };

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


  const handleDropdownChange = (e, name)=>{
    setData(prev=>({
      ...prev,
      [name]: e
    }));
  }

  const USER_ROLE = [
    { label: "Admin", value: "admin" },
    { label: "Publisher", value: "publisher" },
  ];

  return (
    <div>
      <Col className="pb-4">
        <Form.Label htmlFor="inputPassword5">Name</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          type="text"
          id="inputPassword1"
          name="name"
          placeholder="Enter category name"
          aria-describedby="passwordHelpBlock"
        />
      </Col>
      <Col className="pb-4">
        <Form.Label htmlFor="inputPassword5">Email Id</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          type="text"
          id="inputPassword2"
          name="email"
          placeholder="Enter category name"
          aria-describedby="passwordHelpBlock"
        />
      </Col>
      <Col className="mb-4">
        <Form.Label htmlFor="inputPassword3">Role</Form.Label>
        <SingleSelect
        defaultValue={USER_ROLE[1]}
         onChange={(e)=>handleDropdownChange(e, "role")}
         options={USER_ROLE}
        />
      </Col>
      <Col className="mb-4">
        <Form.Label htmlFor="inputPassword3">Password</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          type="text"
          id="inputPassword3"
          name="password"
          placeholder="Enter category name"
          aria-describedby="passwordHelpBlock"
        />
      </Col>
      <Form.Label htmlFor="inputPassword4">Confirm Password</Form.Label>
      <Form.Control
        onChange={handleInputChange}
        type="text"
        id="inputPassword4"
        name="confirm_password"
        placeholder="Enter category name"
        aria-describedby="passwordHelpBlock"
      />
      <Button onClick={handleSubmit} className="mt-4 px-4">
        Save
      </Button>
    </div>
  );
};

export default AddUser;

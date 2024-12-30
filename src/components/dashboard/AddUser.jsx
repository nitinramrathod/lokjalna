import { postTag } from "@/utils/services/dashboard.services";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import SingleSelect from "../form/SingleSelect";

const AddUser = ({ callback, handleClose }) => {
  const [data, setData] = useState({});

  const handleSubmit = () => {
    postTag(data)
      .then((res) => {
        console.log("res", res);
        if (callback) callback();
        if (handleClose) handleClose();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


  const handleDropdownChange = (e, name)=>{
    console.log('e', e)
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
          id="inputPassword5"
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
          id="inputPassword5"
          name="name"
          placeholder="Enter category name"
          aria-describedby="passwordHelpBlock"
        />
      </Col>
      <Col className="mb-4">
        <Form.Label htmlFor="inputPassword5">Category</Form.Label>
        <SingleSelect
        defaultValue={USER_ROLE[1]}
         onChange={(e)=>handleDropdownChange(e, "category")}
         options={USER_ROLE}
        />
      </Col>
      <Col className="mb-4">
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          type="text"
          id="inputPassword5"
          name="name"
          placeholder="Enter category name"
          aria-describedby="passwordHelpBlock"
        />
      </Col>
      <Form.Label htmlFor="inputPassword5">Confirm Password</Form.Label>
      <Form.Control
        onChange={handleInputChange}
        type="text"
        id="inputPassword5"
        name="name"
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

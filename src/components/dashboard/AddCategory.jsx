import { postCategory } from "@/utils/services/dashboard.services";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddCategory = ({callback, handleClose}) => {
  const [data, setData] = useState({});

  const handleSubmit = () => {
       const formData = new FormData();
    
    for (const [key, value] of Object.entries(data)) {
     
      formData.append(key, value);
      
    }


    postCategory(formData)
      .then((res) => {
        console.log("res", res);
        if(callback)callback();
        if(handleClose)handleClose();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Form.Label htmlFor="inputPassword5">Name</Form.Label>
      <Form.Control
        onChange={handleInputChange}
        type="text"
        id="inputPassword5"
        name="name"
        placeholder="Enter category name"
        aria-describedby="passwordHelpBlock"
      />
      <Button onClick={handleSubmit} className="mt-4 px-4">
        Add
      </Button>
    </div>
  );
};

export default AddCategory;

"use client";
import { clearToken, getToken } from "@/utils/helper/localStorage";
import { deleteNews } from "@/utils/services/news.services";
import React from "react";
import { Button, Dropdown } from "react-bootstrap";

const DeleteButton = ({ id }) => {
  const handleDelete = async () => {
    try {
      const token = getToken();
      const response = await deleteNews(id, token);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <Dropdown.Item className="delete" onClick={handleDelete}  size="sm">
      Delete
    </Dropdown.Item>
  );
};

export default DeleteButton;

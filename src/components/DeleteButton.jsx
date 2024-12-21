"use client";
import { clearToken, getToken } from "@/utils/helper/localStorage";
import { deleteNews } from "@/utils/services/news.services";
import React from "react";
import { Button } from "react-bootstrap";

const DeleteButton = ({ id }) => {
  const handleDelete = async () => {
    try {
      const token = getToken();
      console.log("token", token);
      const response = await deleteNews(id, token);
      console.log("response", response);
    } catch (error) {
      clearToken();
      console.log("error", error);
    }
  };
  return (
    <Button onClick={handleDelete} variant="danger" size="sm">
      Delete
    </Button>
  );
};

export default DeleteButton;

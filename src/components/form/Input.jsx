import ErrorText from "@/pages/common/form.styld";
import React from "react";
import { Form } from "react-bootstrap";

const Input = ({
  onChange,
  label = "",
  placeholder = "",
  name = "",
  error = "",
  value = "",
  type = "text",
  as = "input",
  rows = "3",
}) => {
  return (
    <>
      <Form.Label htmlFor={name + "-label"}>{label}</Form.Label>
      <Form.Control
        as={as}
        onChange={onChange}
        rows={rows}
        value={value || ""}
        type={type}
        id={name + "-label"}
        name={name}
        placeholder={placeholder}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
};

export default Input;

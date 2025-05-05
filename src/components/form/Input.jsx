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
  className="",
  innerRef
}) => {
  return (
    <div className={className}>
      <Form.Label htmlFor={name + "-label"}>{label}</Form.Label>
      <Form.Control
      ref={innerRef}
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
    </div>
  );
};

export default Input;

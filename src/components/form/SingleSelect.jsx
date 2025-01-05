import ErrorText from "@/pages/common/form.styld";
import React from "react";
import { Form } from "react-bootstrap";

import Select from "react-select";

const SingleSelect = ({ onChange, name,error, defaultValue, label, options }) => {
  return (
    <div>
      <Form.Label htmlFor={name + "-label"}>{label}</Form.Label>

      <Select
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
      />
      {error && <ErrorText>{error}</ErrorText>}

    </div>
  );
};

export default SingleSelect;

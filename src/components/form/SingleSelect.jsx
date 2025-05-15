import ErrorText from "@/ui/common/form.styld";
import React from "react";
import { Form } from "react-bootstrap";

import Select from "react-select";

const SingleSelect = ({ onChange, value, name,error, defaultValue, label, placeholder, options }) => {
  debugger;
  

  return (
    <div>
      <Form.Label htmlFor={name + "-label"}>{label}</Form.Label>

      <Select
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
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

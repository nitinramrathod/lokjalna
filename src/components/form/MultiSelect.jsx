import ErrorText from "@/ui/common/form.styld";
import React from "react";
import { Form } from "react-bootstrap";

import Select from "react-select";

const MultiSelect = ({ onChange, name, error, placeholder, label, defaultValue, options }) => {
  return (
    <div>
      <Form.Label htmlFor={name + "-label"}>{label}</Form.Label>

      <Select
        id={name + "-label"}
        onChange={onChange}
        defaultValue={defaultValue}
        isMulti
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder={placeholder}
      />
      {error && <ErrorText>{error}</ErrorText>}

    </div>
  );
};

export default MultiSelect;

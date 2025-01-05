import ErrorText from "@/pages/common/form.styld";
import React from "react";
import { Form } from "react-bootstrap";

import Select from "react-select";

const MultiSelect = ({ onChange, name, error, label, defaultValue, options }) => {
  return (
    <div>
      <Form.Label htmlFor={name + "-label"}>{label}</Form.Label>

      <Select
        onChange={onChange}
        defaultValue={defaultValue}
        isMulti
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
      />
      {error && <ErrorText>{error}</ErrorText>}

    </div>
  );
};

export default MultiSelect;

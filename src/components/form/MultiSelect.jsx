import React from "react";

import Select from "react-select";

const MultiSelect = ({ onChange, defaultValue, options }) => {
  return (
    <div>
      <Select
        onChange={onChange}
        defaultValue={defaultValue}
        isMulti
        name="colors"
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
  );
};

export default MultiSelect;

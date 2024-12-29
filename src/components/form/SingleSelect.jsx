import React from "react";

import Select from "react-select";

const SingleSelect = ({ onChange,defaultValue, options }) => {
  return (
    <div>
      <Select
        defaultValue={defaultValue}
        onChange={onChange}
        name="colors"
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
  );
};

export default SingleSelect;

import React from "react";

const InputField = ({ className, type, placeholder, value, onChange }) => {
  return (
    <div className="inputbox">
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default InputField;

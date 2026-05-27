import React from "react";

const Input = ({
  placeholder,
  icon,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div className="bg-neutral-50 flex justify-center items-center rounded-xl h-12.5">
      {icon ? <img src={icon} alt="icon" /> : ""}
      <input
        className="w-11/12 h-11/12 outline-0"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;

import React from "react";

const Input = ({
  placeholder,
  icon,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  iconClassname,
  boxClassname,
  name,
}) => {
  return (
    <div
      className={`${boxClassname} bg-neutral-50 flex justify-center items-center rounded-xl h-12.5`}
    >
      {icon ? <img src={icon} alt="icon" className={iconClassname} /> : ""}
      <input
        className="w-11/12 h-11/12 outline-0 text-textC"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        name={name}
      />
    </div>
  );
};

export default Input;

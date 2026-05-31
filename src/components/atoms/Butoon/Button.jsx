import React from "react";

const Button = ({
  children,
  onClick,
  iconSrc,
  iconAlt = "icon",
  buttonClassName = "",
  iconClassName = "",
}) => {
  const hasIcon = iconSrc ? true : false;

  return (
    <button
      onClick={onClick}
      className={`
        ${buttonClassName}
        flex items-center justify-center 
        px-5 py-3 text-white focus:outline-none rounded-2xl bg-primary-500 dark:bg-primary-800
        ${hasIcon ? "gap-1.5" : ""}
      `}
    >
      {iconSrc && <img src={iconSrc} alt={iconAlt} className={iconClassName} />}
      {children}
    </button>
  );
};

export default Button;

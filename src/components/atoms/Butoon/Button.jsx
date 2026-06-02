import React from "react";


const Button = ({
  children,
  onClick,
  iconSrc,
  iconSrc2,
  iconAlt = "icon",
  iconAlt2 = "icon",
  buttonClassName = "",
  iconClassName = "",
  iconClassName2 = "",
  type
  
}) => {
  const hasIcon = iconSrc ? true : false;

  return (
    <button
    type={type}
      onClick={onClick}
      className={`
        ${buttonClassName}
        flex items-center justify-center cursor-pointer
        px-5 py-3 text-white focus:outline-none rounded-2xl bg-primary-500 dark:bg-primary-800
        ${hasIcon ? "gap-1.5" : ""}
      `}
    >
      {iconSrc && <img src={iconSrc} alt={iconAlt} className={iconClassName} />}
      {children}
      {iconSrc2 && (
        <img src={iconSrc2} alt={iconAlt2} className={iconClassName2} />
      )}
    </button>
  );
};

export default Button;

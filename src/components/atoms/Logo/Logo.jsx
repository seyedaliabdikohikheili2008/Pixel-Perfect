import React, { useEffect, useState } from "react";
import linear from "../../../assets/images/LogoImages/linear.png";
import vertical from "../../../assets/images/LogoImages/vertical.png";
import notext from "../../../assets/images/LogoImages/notext.png";

const Logo = ({ variant, className , Exception = false }) => {
  const [isMobile, setisMobile] = useState(window.innerWidth < 850);

  const logoSrc = () => {
    if ((variant == "linear" && !isMobile) || (Exception)) return linear;
    if (variant == "linear" && isMobile) return notext;
    if (variant == "vertical") return vertical;
  };

  const sizeClass = variant == "linear" && isMobile && !Exception ? "w-11" : "w-34 xl:w-46.85";

  useEffect(() => {
    const handleResize = () => {
      setisMobile(window.innerWidth < 850);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <img
        src={logoSrc()}
        alt="Logo"
        className={`${sizeClass} h-auto object-contain ${className}`}
      />
    </>
  );
};

export default Logo;

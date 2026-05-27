import React, { useEffect, useState } from "react";
import linear from "../../../assets/images/LogoImages/linear.png";
import vertical from "../../../assets/images/LogoImages/vertical.png";
import notext from "../../../assets/images/LogoImages/notext.png";

const Logo = ({ variant, className, responsive = true }) => {
  const [isMobile, setisMobile] = useState(window.innerWidth < 768);

  const logoSrc = () => {
    if (variant == "linear" && !isMobile) return linear;
    if (variant == "linear" && isMobile) return notext;
    if (variant == "vertical") return vertical;
  };

  const sizeClass = variant == "linear" && isMobile ? "w-11" : "w-34 xl:w-59";

  useEffect(() => {
    const handleResize = () => {
      setisMobile(window.innerWidth < 768);
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

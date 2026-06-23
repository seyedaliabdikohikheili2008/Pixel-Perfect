import React from "react";
import defaultImage from "../../../assets/images/course-dtail/js.jpg";

const FallbackImage = ({ src, alt = "", className = "" }) => {
  return (
    <img
      src={src || defaultImage}
      alt={alt}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = defaultImage;
      }}
      className={className}
    />
  );
};

export default FallbackImage;

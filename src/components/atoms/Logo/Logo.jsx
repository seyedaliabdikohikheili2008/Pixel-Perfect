import React from 'react'

const Logo = ({theme,variant,className,responsive}) => {
    const logoSrc=()=>{
        if(theme==="gray" && variant==="full") return "/images/LogoImages/Group 3254.png";
        if(theme==="dark" && variant==="full") return "/images/LogoImages/logo-dark.png";
        if(theme==="light" && variant==="full") return "/images/LogoImages/logo-light.png";
        if(theme==="light" && variant==="icon") return "/images/LogoImages/Untitled-1 5.png";
    }
    const sizeClass = responsive
    ? "w-24 sm:w-28 md:w-32"
    : "w-32";
  return (
    <>
    <img
      src={logoSrc()}
      alt="Logo"
      className={`${sizeClass} h-auto object-contain ${className}`}
    />
    </>
  )
}

export default Logo
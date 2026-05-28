import React, { useState } from "react";
import Logo from "../../atoms/Logo/Logo";
import UnderMenu from "./UnderMenu";
import DarkModeButton from "../../atoms/DarkModeButton/DarkModeButton";
import Button from "../../atoms/Butoon/Button";
import umenu from "../../../assets/images/icons/header/umenuIcon.png";

const Header = ({ variant }) => {
    const [UMenuFlag, setUMenuFlag] = useState(false);
  return (
    <>
      <div className="relative w-11/12 h-23.5 rounded-2xl shadow-[0px_50px_100px_0px_#48484829] flex items-center justify-between px-5 mt-5">
        <div>
          <Logo variant={variant} />
        </div>
        <div>
          <UnderMenu flag={UMenuFlag} />
        </div>
        <div className="flex items-center gap-3">
          <DarkModeButton />
          <Button children={"ورود یا ثبت نام"} />
          <img className="w-10 h-10 md:hidden" src={umenu} alt="" onClick={()=>{setUMenuFlag((prev)=>!prev)}} />
        </div>
      </div>
    </>
  );
};

export default Header;

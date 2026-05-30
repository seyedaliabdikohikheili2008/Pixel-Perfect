import React, { useEffect, useState } from "react";
import Logo from "../../atoms/Logo/Logo";
import UnderMenu from "../../molecules/header/UnderMenu";
import DarkModeButton from "../../atoms/DarkModeButton/DarkModeButton";
import Button from "../../atoms/Butoon/Button";
import umenu from "../../../assets/images/icons/header/umenuIcon.png";
import umenuDark from "../../../assets/images/icons/header/umenuIconDark.png";
import { useSelector } from "react-redux";

const Header = ({ variant }) => {
  const [UMenuFlag, setUMenuFlag] = useState(false);

  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false); 
      } else {
        setShowHeader(true); 
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mode = useSelector((state) => state.DarkFlag.value);
  return (
    <>
      <div className="relative w-11/12 h-23.5 z-50 bg-rootBg mx-auto rounded-2xl flex items-center justify-between px-5 mt-5"></div>
      <div className={`${showHeader ? "translate-y-0" : "translate-y-[-125%]"} transition-[translate] duration-300 fixed top-0 right-0 left-0 w-11/12 h-23.5 z-50 bg-background mx-auto rounded-2xl shadow-[0px_50px_100px_0px_#48484829] flex items-center justify-between px-5 mt-5`}>
        <div>
          <Logo variant={variant} />
        </div>
        <div>
          <UnderMenu flag={UMenuFlag} />
        </div>
        <div className="flex items-center gap-3">
          <DarkModeButton />
          <Button children={"ورود یا ثبت نام"} />
          <img
            className="w-10 h-10 md:hidden"
            src={mode === "light" ? umenu : umenuDark}
            alt=""
            onClick={() => {
              setUMenuFlag((prev) => !prev);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Header;

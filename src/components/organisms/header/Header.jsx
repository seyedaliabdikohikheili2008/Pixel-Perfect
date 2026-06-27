import React, { useEffect, useState } from "react";
import Logo from "../../atoms/Logo/Logo";
import UnderMenu from "../../molecules/header/UnderMenu";
import DarkModeButton from "../../atoms/DarkModeButton/DarkModeButton";
import Button from "../../atoms/Butoon/Button";
import umenu from "../../../assets/images/icons/header/umenuIcon.png";
import umenuDark from "../../../assets/images/icons/header/umenuIconDark.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import user from "../../../assets/images/course-dtail/user.png";
import { isAuthenticated } from "../../../core/utils/auth/IsAuthenticated";
import { useProfileInfo } from "../../../core/hooks/queries/user-panel/dashboard/useProfileInfo";
import MobileMenu from "../../molecules/header/MobileMenu ";

const Header = ({ variant }) => {
  const { t } = useTranslation("header");
  const [UMenuFlag, setUMenuFlag] = useState(false);
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState(true);

  const {
    data: ProfileInfo,
    isError: ProfileInfoErr,
    isLoading: ProfileInfoLoading,
    error: ProfileInfoError,
  } = useProfileInfo({
    enabled: isAuthenticated(),
  });

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
      <div className="relative w-11/12 h-23.5 bg-rootBg mx-auto rounded-2xl flex items-center justify-between px-5 mt-5"></div>
      <div
        className={`${showHeader ? "translate-y-0" : "translate-y-[-125%]"} transition-[translate] max-w-450 duration-300 fixed top-0 right-0 left-0 w-11/12 h-23.5 z-40 bg-background mx-auto rounded-2xl shadow-[0px_50px_100px_0px_#48484829] flex items-center justify-between px-5 mt-5`}
      >
        <div>
          <Logo variant={variant} />
        </div>
        <div>
          <UnderMenu />
        </div>
        <div className="flex items-center gap-3">
          <DarkModeButton />
          {isAuthenticated() ? (
            <img
              onClick={() => {
                navigate("/user-panel");
              }}
              src={ProfileInfo?.data?.currentPictureAddress || user}
              alt="پروفایل"
              className="w-15 h-15 rounded-full overflow-hidden object-cover"
            />
          ) : (
            <Button
              children={t("loginOrRegister")}
              onClick={() => navigate("/auth/login")}
            />
          )}

          <img
            className="w-10 h-10 lg:hidden"
            src={mode === "light" ? umenu : umenuDark}
            alt=""
            onClick={() => {
              setUMenuFlag((prev) => !prev);
            }}
          />
        </div>
      </div>
      <MobileMenu flag={UMenuFlag} setFlag={setUMenuFlag} />
    </>
  );
};

export default Header;

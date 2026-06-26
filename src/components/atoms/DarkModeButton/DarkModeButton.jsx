import React, { useEffect } from "react";
import sun from "../../../assets/images/icons/dark-mode/btn-icon.png";
import moon from "../../../assets/images//icons/dark-mode/Property 1=lghit.png";
import { useDispatch, useSelector } from "react-redux";
import { reverseDarkValue } from "../../../core/feature/dark-mode/Darkslice";
const DarkModeButton = () => {

  const dispatch = useDispatch();
  const mode = useSelector((state) => state.DarkFlag.value);
  useEffect(() => {
    localStorage.setItem("theme", mode);
    document.body.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return (
    <button
      onClick={() => dispatch(reverseDarkValue())}
      className="flex z-30 items-center justify-center w-10 h-10 rounded-full focus:outline-none "
      aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
    >
      {mode === "light" ? (
        <img src={moon} alt="Moon Icon" />
      ) : (
        <img src={sun} alt="Sun Icon" />
      )}
    </button>
  );
};

export default DarkModeButton;

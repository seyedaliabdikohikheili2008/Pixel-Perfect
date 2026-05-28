import React from "react";
import icontop from "../../../assets/images/icons/scroll-to-top-button/arrow-right-02-round.png"

const ScrollToTopButton=()=> {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Go to top"
      className="flex absolute -top-2 left-25 items-center z-10 justify-center w-22 h-21  bg-primary-300 dark:bg-primary-700 rounded-2xl"
    >
      <img src={icontop} alt="arrow" className="w-12.5 h-12.5" />
    </button>
  );
}

export default ScrollToTopButton;

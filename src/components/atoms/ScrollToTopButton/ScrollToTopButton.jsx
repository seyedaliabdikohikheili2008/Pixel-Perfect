import React from "react";

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
      className="flex items-center justify-center w-22 h-21  bg-primary-300 dark:bg-primary-700 rounded-lg"
    >
      <img src="../../../assets/images/icons/scroll-to-top-button/arrow-right-02-round.png" alt="arrow" className="w-12.5 h-12.5 rotate-90" />
    </button>
  );
}

export default ScrollToTopButton;

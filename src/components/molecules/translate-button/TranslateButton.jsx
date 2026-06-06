import i18next from "i18next";
import React from "react";
import { MdGTranslate } from "react-icons/md";

const TranslateButton = () => {
  return (
    <>
      <div
        onClick={() => {
          i18next.language == "fa"
            ? i18next.changeLanguage("en")
            : i18next.changeLanguage("fa");
        }}
        className="w-12 h-12 rounded-full z-50 fixed bottom-8 right-5 shadow-[0px_50px_100px_0px_#484848] flex items-center justify-center cursor-pointer bg-primary-500 group"
      >
        <MdGTranslate className="text-textC text-2xl" />
        <div
          className="fixed right-5 bottom-20 mb-2
           px-2 py-1 text-sm text-white bg-black rounded
           opacity-0
           transition-opacity duration-200
           group-hover:opacity-100"
        >
          translate
        </div>
      </div>
    </>
  );
};

export default TranslateButton;

import React from "react";
import copyright from "../../../assets/images/icons/copyright/copyright.png";
import linkdin from "../../../assets/images/icons/social medias/linkdin.png";
import whatsapp from "../../../assets/images/icons/social medias/whatsapp.png";
import facebook from "../../../assets/images/icons/social medias/facebook.png";
import twitter from "../../../assets/images/icons/social medias/twitter.png";
import instagram from "../../../assets/images/icons/social medias/instagram.png";

const CopyrightFooter = () => {
  return (
    <div className="w-11/12 mb-10 mx-auto h-14 rounded-2xl bg-dark-300 flex items-center justify-center md:justify-between">
      <div className="hidden md:w-auto h-5 md:flex items-center gap-2.5 px-1">
        <img src={copyright} alt="copyright" />
        <p className="font-sans font-normal text-[12px] text-right text-white">
          تمام حقوق مادی و معنوی این طراحی متعلق به امیر محمد خیرابادی میباشد
        </p>
      </div>
      <div className="flex items-center gap-4 px-2">
        <img src={linkdin} alt="linkdin" />
        <img src={whatsapp} alt="whatsapp" />
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={instagram} alt="instagram" />
      </div>
    </div>
  );
};

export default CopyrightFooter;

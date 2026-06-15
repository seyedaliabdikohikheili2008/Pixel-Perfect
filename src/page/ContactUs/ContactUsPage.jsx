import React from "react";
import top from "../../assets/images/contactUs/top.png";
import Describtion from "../../components/templates/ContactUs/describtion/Describtion";
import SendMessage from "../../components/templates/ContactUs/SendMessage/SendMessage";
import Map from "../../components/templates/ContactUs/Map/Map";

const ContactUsPage = () => {
  return (
    <div className="w-11/12 m-auto flex flex-col items-center gap-10">
      <div className=" mt-12">
        <img src={top} alt="" className="h-80" />
        <div className="relative bottom-50 ">
          <h2 className="font-bold text-white text-2xl xl:text-5xl ">تماس با ما</h2>
          <p className="xl:text-xl text-lg text-white mt-3">با دریافت پشتیبانی با اکادمی بحر در ارتباط باشید</p>
        </div>
      </div>
      <Describtion/>
    <SendMessage/>
    <Map/>
    </div>
  );
};

export default ContactUsPage;

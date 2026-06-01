import React from "react";
import Logo from "../../atoms/Logo/Logo";
import { useNavigate } from "react-router-dom";

const UnderMenu = ({ flag }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`${flag ? "opacity-100 visible" : "invisible opacity-0"} z-50 bg-background rounded-b-2xl md:opacity-100 md:visible transition-[visibility,opacity] duration-300 ease-out top-21 md:top-0 right-0 absolute md:relative w-full md:w-100 flex flex-col items-center`}
      >
        <ul className="w-11/12 flex flex-col md:flex-row md:items-center md:justify-between gap-4.5 py-4 mb-4 md:mb-0 md:border-0 border-b border-neutral-300">
          <li
            onClick={() => {
              navigate("/");
            }}
            className="w-full cursor-pointer md:w-auto flex justify-between"
          >
            <h3 className="font-normal text-xl md:text-base md:font-bold text-textC">
              خانه
            </h3>
            <h3 className="font-normal text-base md:hidden text-neutral-500">
              صفحه اصلی
            </h3>
          </li>
          <li
            onClick={() => {
              navigate("/courses");
            }}
            className="w-full cursor-pointer md:w-auto flex justify-between"
          >
            <h3 className="font-normal text-xl md:text-base md:font-bold text-textC">
              دوره ها
            </h3>
            <h3 className="font-normal text-base md:hidden text-neutral-500">
              دوره های ما
            </h3>
          </li>
          <li className="w-full cursor-pointer md:w-auto flex justify-between">
            <h3 className="font-normal text-xl md:text-base md:font-bold text-textC">
              اساتید
            </h3>
            <h3 className="font-normal text-base md:hidden text-neutral-500">
              اساتید برتر ما
            </h3>
          </li>
          <li className="w-full cursor-pointer md:w-auto flex justify-between">
            <h3 className="font-normal text-xl md:text-base md:font-bold text-textC">
              اخبار و مقالات
            </h3>
            <h3 className="font-normal text-base md:hidden text-neutral-500">
              اخبار و مقالات
            </h3>
          </li>
          <li className="w-full cursor-pointer md:w-auto flex justify-between">
            <h3 className="font-normal text-xl md:text-base md:font-bold text-textC">
              ارتباط باما
            </h3>
            <h3 className="font-normal text-base md:hidden text-neutral-500">
              با ما در ارتباط بشید
            </h3>
          </li>
        </ul>
        <div className="md:hidden mb-3">
          <Logo variant={"linear"} Exception={true} />
        </div>
      </div>
    </>
  );
};

export default UnderMenu;

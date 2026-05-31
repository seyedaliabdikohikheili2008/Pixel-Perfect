import React from "react";
import Button from "../../atoms/Butoon/Button";
import vector from "../../../assets/images/icons/not-found/elements.png";
import { useNavigate } from "react-router-dom";

const NotFoundSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-200 bg-[url('/not-found/Group11301.png')] bg-no-repeat bg-cover bg-center mb-8">
        <div className="flex flex-col items-center gap-3">
          <h1
            className="text-primary-500 text-[205px] font-normal"
            style={{ fontFamily: "Lilita One" }}
          >
            404
          </h1>
          <h5 className="text-textC text-2xl font-semibold">مشکلی پیش امده</h5>
          <Button
            onClick={() => {
              navigate(-1);
            }}
            children={"بازگشت به صفحه قبلی"}
            iconSrc2={vector}
            iconClassName2="mr-2"
            buttonClassName="w-55"
          />
        </div>
      </div>
    </>
  );
};

export default NotFoundSection;

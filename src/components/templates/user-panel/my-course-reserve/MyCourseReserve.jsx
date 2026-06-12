import React from "react";
import Input from "../../../atoms/Input/Input";
import { LiaSearchSolid } from "react-icons/lia";
import Button from "../../../atoms/Butoon/Button";
import img from "../../../../assets/images/user-panel/38bdd9e8afe89a72aeaf82a4cb63301c8ca9bb7b.jpg";
import { RxCross1 } from "react-icons/rx";
import { IoEyeOutline } from "react-icons/io5";
import { useMyCourseReserve } from "../../../../core/hooks/queries/user-panel/dashboard/useMyCourseReserve";

const MyCourseReserve = () => {
  const {
    data: MyCourseReserve = undefined,
    isError: MyCourseReserveErr,
    isLoading: MyCourseReserveLoading,
  } = useMyCourseReserve();
  console.log(MyCourseReserve);

  return (
    <>
      <div className="w-full max-h-full flex-1 flex flex-col items-start gap-5">
        <h2 className="text-textC text-3xl font-bold">رزرو من</h2>
        <div className="w-full h-full p-5 flex flex-col gap-4 shadow-[0px_50px_100px_0px_#48484829] rounded-3xl bg-background">
          <div className="flex gap-3">
            <div className="flex flex-col gap-2">
              <h5 className="text-base text-textC flex gap-2 items-center">
                <LiaSearchSolid size={22} />
                جستوجو دوره
              </h5>
              <Input boxClassname={"w-62"} placeholder={"جستوجو دوره"} />
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="text-base text-textC flex gap-2 items-center">
                <LiaSearchSolid size={22} />
                جستوجو اساتید
              </h5>
              <Input boxClassname={"w-62"} placeholder={"جستوجو اساتید"} />
            </div>
          </div>
          <div className="w-full flex-1 flex flex-col gap-5">
            {MyCourseReserve?.data?.map((item, index) => {
              return (
                <div className="w-full flex justify-between items-center">
                  <img
                    className="w-25 h-15 rounded-2xl overflow-hidden object-cover"
                    src={img}
                    alt=""
                  />
                  <h3 className="text-text text-lg">{item?.courseName}</h3>
                  <p className="text-textC text-base w-30 line-clamp-1">
                    محسن اسفندیاری ، مهدی اصغری
                  </p>
                  <h3 className="text-textC text-base">
                    <span className="text-xl">1،800،000</span>تومان
                  </h3>
                  <Button children={"شروع یاد گیری"} buttonClassName="h-10" />
                  <div className="flex p-2 border border-neutral-300 rounded-full">
                    <RxCross1 color="#FF5454" size={20} />
                  </div>
                </div>
              );
            })}
            {/* {MyCourseReserve?.data?.map((item, index) => {
              return (
                <div className="w-full flex justify-between items-center">
                  <img
                    className="w-25 h-15 rounded-2xl overflow-hidden object-cover"
                    src={img}
                    alt=""
                  />
                  <h3 className="text-text text-lg">{item?.courseName}</h3>
                  <p className="text-textC text-base w-30 line-clamp-1">
                    محسن اسفندیاری ، مهدی اصغری
                  </p>
                  <h3 className="text-textC text-base">
                    <span className="text-xl">1،800،000</span>تومان
                  </h3>
                  <Button children={"شروع یاد گیری"} buttonClassName="h-10" />
                  <div className="flex p-2 border border-neutral-300 rounded-full">
                    <RxCross1 color="#FF5454" size={20} />
                  </div>
                </div>
              );
            })}
            {MyCourseReserve?.data?.map((item, index) => {
              return (
                <div className="w-full flex justify-between items-center">
                  <img
                    className="w-25 h-15 rounded-2xl overflow-hidden object-cover"
                    src={img}
                    alt=""
                  />
                  <h3 className="text-text text-lg">{item?.courseName}</h3>
                  <p className="text-textC text-base w-30 line-clamp-1">
                    محسن اسفندیاری ، مهدی اصغری
                  </p>
                  <h3 className="text-textC text-base">
                    <span className="text-xl">1،800،000</span>تومان
                  </h3>
                  <Button children={"شروع یاد گیری"} buttonClassName="h-10" />
                  <div className="flex p-2 border border-neutral-300 rounded-full">
                    <RxCross1 color="#FF5454" size={20} />
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCourseReserve;

import React from "react";
import ChangePassword from "./changePassword/ChangePassword";

const SecuritySetting = () => {
  return (
    <div className="m-auto w-11/12 flex flex-col gap-5">
      <h2 className="text-textC text-3xl font-bold text-right">
        تنظیمات امنیتی
      </h2>
      <div className="flex flex-col gap-6 ">
        <div className="flex items-center gap-6">
          <h3 className="font-normal text-right text-textC text-nowrap">
            تغییر رمز عبور
          </h3>
          <div className="w-full h-px bg-gray-300 my-3"></div>
        </div>

        <ChangePassword />
      </div>
      <div className="mt-10 flex flex-col gap-6">
        <div className="flex items-center gap-6">
          <h3 className="font-normal text-right text-textC text-nowrap">
            تایید دو مرحله ای
          </h3>
          <div className="w-full h-px bg-gray-300 my-3"></div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <input
            type="checkbox"
            name="twoFactor"
            id="twoFactor"
            className="w-4 h-4"
          />
          <label className="text-textC" htmlFor="twoFactor">
            مایل به ورود دو مرحله‌ای هستم
          </label>
        </div>
      </div>
    </div>
  );
};

export default SecuritySetting;

import React from "react";
import TeacherSidebar from "../../../organisms/teacher-details/teacherSidebar/TeacherSidebar";
import { useTranslation } from "react-i18next";

const Biography = () => {
  const { t } = useTranslation("teacherDetail");
  return (
    <div className="w-11/12 mx-auto flex flex-col md:flex-row items-start gap-4">
      <TeacherSidebar />
      <div className="w-full md:w-2/3 text-right flex flex-col gap-4 pt-5">
        <h1 className="font-bold text-textC text-3xl">{t("biography.title")}</h1>
        <p className="font-bold text-[16px] text-neutral-300">
          من توسعه دهنده فرانت و دولور قالب برای راستچین هستم. من اشتیاق جدی به
          جلوه‌های رابط کاربری، انیمیشن‌ها و ایجاد تجربه‌های کاربری بصری و پویا
          دارم. من توسعه دهنده فرانت و دولور قالب برای راستچین هستم. من اشتیاق
          جدی به جلوه‌های رابط کاربری، انیمیشن‌ها و ایجاد تجربه‌های کاربری بصری
          و پویا دارم.من توسعه دهنده فرانت و دولور قالب برای راستچین هستم. من
          اشتیاق جدی به جلوه‌های رابط کاربری، انیمیشن‌ها و ایجاد تجربه‌های
          کاربری بصری و پویا دارم.من توسعه دهنده فرانت و دولور قالب برای راستچین
          هستم. من اشتیاق جدی به جلوه‌های رابط کاربری، انیمیشن‌ها و ایجاد
          تجربه‌های کاربری بصری و پویا دارم.
        </p>
      </div>
    </div>
  );
};

export default Biography;

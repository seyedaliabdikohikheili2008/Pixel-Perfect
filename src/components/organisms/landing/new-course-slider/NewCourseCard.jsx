import React from "react";
import Button from "../../../atoms/Butoon/Button";
import credit from "../../../../assets/images/icons/courses/credit-card.png";
import { useTranslation } from "react-i18next";
import FallbackImage from "../../../atoms/image/FallbackImage";
import { useNavigate } from "react-router-dom";
import { MenuItem } from "@heroui/react";

const NewCourseCard = ({ detail }) => {
  const { t } = useTranslation("landing");
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between w-full gap-10 ">
        <FallbackImage
          src={detail?.imageAddress}
          alt={"new-course"}
          className={"w-1/3 rounded-full overflow-hidden"}
        />
        <div className="flex w-2/3 flex-col items-end gap-5">
          <div className="text-right w-full flex flex-col gap-5">
            <h3 className="text-xl font-bold text-textC">{detail?.title}</h3>
            <p className="text-sm text-textC font-bold line-clamp-2">
              {detail?.describe}
            </p>
            <div className="flex gap-13">
              <div className="bg-saccess-100 flex items-center justify-center text-saccess-700 text-base font-bold w-32 h-10 rounded-full">
                {detail?.cost} {t("price")}
              </div>
            </div>
          </div>
          <Button
            children={t("NewCourseSection.button")}
            iconSrc={credit}
            onClick={() => {
              navigate(`/course-detail/${detail?.courseId}`);
            }}
            buttonClassName="rounded-full w-42 text-nowrap"
          />
        </div>
      </div>
    </>
  );
};

export default NewCourseCard;

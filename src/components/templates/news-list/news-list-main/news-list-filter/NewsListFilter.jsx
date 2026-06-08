import React, { useMemo } from "react";
import Input from "../../../../atoms/Input/Input";
import filter from "../../../../../assets/images/icons/courses/filter.png";
import { Accordion, Label, Radio, RadioGroup, Slider } from "@heroui/react";
import { isFulfilled } from "@reduxjs/toolkit";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import FilterSection from "../../../../molecules/filter-section/FilterSection";
import { useAllNewsCategory } from "../../../../../core/hooks/queries/news/useAllNewsCategory";
import { useTranslation } from "react-i18next";
const NewsListFilter = () => {
  const MenuStatus = useSelector((state) => state.CourseFilterMenu.value);

  const { t } = useTranslation("courses");

  const {
    data: NewsCategoryList = undefined,
    isError: NewsCategoryListErr,
    isLoading: NewsCategoryListLoading,
  } = useAllNewsCategory();

  return (
    <>
      <div
        className={`${MenuStatus ? "block w-11/12 md:w-75" : "hidden w-75"} absolute top-15 left-1/2 -translate-x-1/2 md:translate-x-0 md:top-0 z-40 md:left-0 md:relative md:block  shrink-0 h-fit overflow-hidden bg-background rounded-2xl shadow-[0px_50px_100px_0px_#48484829]`}
      >
        <div className="w-11/12 flex flex-col gap-2 items-center mx-auto my-2">
          <Input
            boxClassname={"w-full flex items-center gap-2"}
            icon={filter}
            placeholder={t("Filter.search")}
            iconClassname={"pr-2"}
          />

          <Accordion
            className={"w-full border-b-1 border-neutral-50 text-right"}
            variant="surface"
            aria-label="Category"
          >
            <Accordion.Item>
              <Accordion.Heading className="h-10 flex items-center">
                <Accordion.Trigger
                  className={"flex justify-between w-full text-textC"}
                >
                  {t("Filter.Category")}
                  <FaChevronDown />
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body>
                  {NewsCategoryList ? (
                    <FilterSection
                      param={"NewsCategoryId"}
                      data={NewsCategoryList?.data}
                    />
                  ) : (
                    ""
                  )}
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default NewsListFilter;

import React, { useMemo, useRef, useState } from "react";
import Input from "../../../../atoms/Input/Input";
import filter from "../../../../../assets/images/icons/courses/filter.png";
import { Accordion, Label, Radio, RadioGroup, Slider } from "@heroui/react";
import { isFulfilled } from "@reduxjs/toolkit";
import { FaChevronDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import FilterSection from "../../../../molecules/filter-section/FilterSection";
import { useAllNewsCategory } from "../../../../../core/hooks/queries/news/useAllNewsCategory";
import { useTranslation } from "react-i18next";
import NotFound from "../../../../atoms/not-found/NotFound";
import Search from "../../../../../core/utils/search/Search";
import { ToggleCourseFilter } from "../../../../../core/feature/courses/CoursesFilterMenu";
const NewsListFilter = () => {
  const MenuStatus = useSelector((state) => state.CourseFilterMenu.value);

  const { t } = useTranslation("courses");

  const {
    data: NewsCategoryList = undefined,
    isError: NewsCategoryListErr,
    isLoading: NewsCategoryListLoading,
  } = useAllNewsCategory();

  const [CategoryName, setCategoryName] = useState("");

  const timeOutRef = useRef(null);
  const handleChange = (e) => {
    const value = e.target.value;

    clearTimeout(timeOutRef.current);

    timeOutRef.current = setTimeout(() => {
      setCategoryName(value);
    }, 1500);
  };
  const searchCategory = NewsCategoryList?.data
    ? Search(NewsCategoryList.data, CategoryName, "categoryName")
    : [];

  const dispatch = useDispatch();

  return (
    <>
      <div
        onClick={() => {
          dispatch(ToggleCourseFilter());
        }}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 lg:hidden ${MenuStatus ? "opacity-100 visible" : "opacity-0 invisible"}`}
      ></div>
      <div
        className={`${MenuStatus ? "block w-full fixed bottom-0 md:w-75" : "hidden w-75"} max-h-11/12 overflow-y-auto z-60 md:z-10 md:relative md:block shrink-0 md:h-fit overflow-hidden bg-background rounded-t-2xl md:rounded-2xl shadow-[0px_50px_100px_0px_#48484829]`}
      >
        <div className="w-11/12 flex flex-col gap-2 items-center mx-auto my-2">
          <Input
            onChange={handleChange}
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
                  <div className="max-h-42.5 overflow-y-auto">
                    {NewsCategoryList ? (
                      <FilterSection param={"ListTech"} data={searchCategory} />
                    ) : (
                      ""
                    )}
                  </div>
                  {searchCategory.length == 0 ? (
                    <NotFound size={"text-sm"} />
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

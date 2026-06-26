import React, { useEffect, useMemo, useRef, useState } from "react";
import Input from "../../../atoms/Input/Input";
import filter from "../../../../assets/images/icons/courses/filter.png";
import { Accordion, Label, Radio, RadioGroup, Slider } from "@heroui/react";
import { isFulfilled } from "@reduxjs/toolkit";
import { FaChevronDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useAllTechnologies } from "../../../../core/hooks/queries/technologies/useAllTechnologies";
import { useAllTeacher } from "../../../../core/hooks/queries/teacher/useAllTeacher";
import FilterSection from "../../../molecules/filter-section/FilterSection";
import { useSearchParams } from "react-router-dom";
import { useAllCoursesType } from "../../../../core/hooks/queries/courses/useAllCourseType";
import { useAllCoursesLevel } from "../../../../core/hooks/queries/courses/useAllCourseLevel";
import { useTranslation } from "react-i18next";
import search from "../../../../assets/images/icons/courses/search.png";
import Search from "../../../../core/utils/search/Search";
import NotFound from "../../../atoms/not-found/NotFound";
import { ToggleCourseFilter } from "../../../../core/feature/courses/CoursesFilterMenu";

const CoursesFilter = () => {
  const MenuStatus = useSelector((state) => state.CourseFilterMenu.value);
  const {
    data: TechnologyList = undefined,
    isError: TechnologyListErr,
    isLoading: TechnologyListLoading,
  } = useAllTechnologies();

  const {
    data: TeacherList = undefined,
    isError: TeacherListErr,
    isLoading: TeacherListLoading,
  } = useAllTeacher();

  const {
    data: CourseTypeList = undefined,
    isError: CourseTypeListErr,
    isLoading: CourseTypeListLoading,
  } = useAllCoursesType();

  const {
    data: CourseLevelList = undefined,
    isError: CourseLevelListErr,
    isLoading: CourseLevelListLoading,
  } = useAllCoursesLevel();

  const [searchParams, setSearchParams] = useSearchParams();

  const CostDown = Number(searchParams.get("CostDown") ?? 0);
  const CostUp = Number(searchParams.get("CostUp") ?? 10000000);

  const radioValue = useMemo(() => {
    if (searchParams.get("CostDown") >= 1) {
      return "money";
    } else if (searchParams.get("CostUp") <= 1) {
      return "free";
    } else {
      return "all";
    }
  }, [searchParams]);

  const handleSliderChange = (value) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("CostDown", String(value[0]));
      newParams.set("CostUp", String(value[1]));
      return newParams;
    });
  };

  const handleRadioPrice = (value) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (value == "free") {
        newParams.set("CostUp", String(1));
        newParams.set("CostDown", String(0));
      } else if (value == "money") {
        newParams.set("CostDown", String(1000));
        newParams.set("CostUp", String(10000000));
      } else {
        newParams.set("CostDown", String(0));
        newParams.set("CostUp", String(10000000));
      }
      return newParams;
    });
  };

  const [teacherName, setteacherName] = useState("");

  const timeOutRef = useRef(null);
  const handleChange = (e) => {
    const value = e.target.value;

    clearTimeout(timeOutRef.current);

    timeOutRef.current = setTimeout(() => {
      setteacherName(value);
    }, 1500);
  };
  const searchTeacher = TeacherList?.data
    ? Search(TeacherList.data, teacherName, "fullName")
    : [];

  const [techName, settechName] = useState("");

  const techTimeOutRef = useRef(null);
  const handleTechChange = (e) => {
    const value = e.target.value;

    clearTimeout(techTimeOutRef.current);

    techTimeOutRef.current = setTimeout(() => {
      settechName(value);
    }, 1500);
  };
  const searchTech = TechnologyList?.data
    ? Search(TechnologyList.data, techName, "techName")
    : [];

  const { t } = useTranslation("courses");
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
        className={`${MenuStatus ? "block w-full fixed bottom-0 md:w-75" : "hidden w-75"} max-h-11/12 overflow-y-auto z-60 md:z-10 md:relative md:block  shrink-0 md:h-fit overflow-hidden bg-background rounded-t-2xl md:rounded-2xl shadow-[0px_50px_100px_0px_#48484829]`}
      >
        <div className="w-11/12 flex flex-col gap-2 items-center mx-auto my-2">
          <Input
            onChange={handleTechChange}
            boxClassname={"w-full flex items-center p-2 gap-2"}
            icon={filter}
            placeholder={t("Filter.search")}
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
                    {TechnologyList ? (
                      <FilterSection param={"ListTech"} data={searchTech} />
                    ) : (
                      ""
                    )}
                  </div>
                  {searchTech.length == 0 ? <NotFound size={"text-sm"} /> : ""}
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

          <Accordion
            className={"w-full border-b-1 border-neutral-50 text-right"}
            variant="surface"
          >
            <Accordion.Item>
              <Accordion.Heading className="h-10 flex items-center">
                <Accordion.Trigger
                  className={"flex justify-between w-full text-textC"}
                >
                  {t("Filter.price")}
                  <FaChevronDown />
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body>
                  <Slider
                    aria-label="price-range"
                    formatOptions={{ useGrouping: true, style: "decimal" }}
                    value={[CostDown, CostUp]}
                    minValue={0}
                    maxValue={10000000}
                    step={1000}
                    onChangeEnd={(value) => {
                      handleSliderChange(value);
                    }}
                  >
                    <Slider.Track className="h-2 bg-neutral-100 rounded-full">
                      {({ state }) => {
                        const min = 0;
                        const max = 10000000;

                        const left = (state.values[0] / max) * 100;
                        const right = (state.values[1] / max) * 100;

                        const start = 100 - right;
                        const width = right - left;
                        return (
                          <>
                            <div
                              className="absolute h-full bg-primary-300 rounded-full"
                              style={{
                                right: `${start}%`,
                                width: `${width}%`,
                              }}
                            />
                            {state.values.map((_, i) => (
                              <Slider.Thumb
                                key={i}
                                index={i}
                                className="size-4 bg-primary-500 rounded-full relative top-1"
                              />
                            ))}
                          </>
                        );
                      }}
                    </Slider.Track>
                    <Slider.Output className={"text-textC"} />
                  </Slider>
                  <RadioGroup
                    value={radioValue}
                    name="free-or-money"
                    className={"flex w-full justify-between flex-wrap"}
                  >
                    <Radio
                      value="free"
                      id="free"
                      onClick={() => {
                        handleRadioPrice("free");
                      }}
                      className={"flex gap-1 text-base text-textC"}
                    >
                      <Radio.Control className="w-5 h-5 bg-primary-50 flex items-center justify-center border border-neutral-400 rounded-md">
                        <Radio.Indicator className="w-2 h-2 flex items-center justify-center">
                          {({ isSelected }) =>
                            isSelected ? (
                              <span className="text-sm font-bold text-center leading-none text-primary-400">
                                ✓
                              </span>
                            ) : null
                          }
                        </Radio.Indicator>
                      </Radio.Control>
                      <Radio.Content>
                        <Label>{t("Filter.free")}</Label>
                      </Radio.Content>
                    </Radio>
                    <Radio
                      value="money"
                      id="money"
                      onClick={() => {
                        handleRadioPrice("money");
                      }}
                      className={"flex gap-1 text-base text-textC"}
                    >
                      <Radio.Control className="w-5 h-5 bg-primary-50 flex items-center justify-center border border-neutral-400 rounded-md">
                        <Radio.Indicator className="w-2 h-2 flex items-center justify-center">
                          {({ isSelected }) =>
                            isSelected ? (
                              <span className="text-sm font-bold text-center leading-none text-primary-400">
                                ✓
                              </span>
                            ) : null
                          }
                        </Radio.Indicator>
                      </Radio.Control>
                      <Radio.Content>
                        <Label>{t("Filter.money")}</Label>
                      </Radio.Content>
                    </Radio>
                    <Radio
                      value="all"
                      id="all"
                      onClick={() => {
                        handleRadioPrice("all");
                      }}
                      className={"flex gap-1 text-base text-textC"}
                    >
                      <Radio.Control className="w-5 h-5 bg-primary-50 flex items-center justify-center border border-neutral-400 rounded-md">
                        <Radio.Indicator className="w-2 h-2 flex items-center justify-center">
                          {({ isSelected }) =>
                            isSelected ? (
                              <span className="text-sm font-bold text-center leading-none text-primary-400">
                                ✓
                              </span>
                            ) : null
                          }
                        </Radio.Indicator>
                      </Radio.Control>
                      <Radio.Content>
                        <Label>{t("Filter.all")}</Label>
                      </Radio.Content>
                    </Radio>
                  </RadioGroup>
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

          <Accordion
            className={"w-full border-b-1 border-neutral-50 text-right"}
            variant="surface"
          >
            <Accordion.Item>
              <Accordion.Heading className="h-10 flex items-center">
                <Accordion.Trigger
                  className={"flex justify-between w-full text-textC"}
                >
                  {t("Filter.teacher")}
                  <FaChevronDown />
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body>
                  <Input
                    onChange={handleChange}
                    icon={search}
                    placeholder={"جستوجو استاد"}
                    boxClassname={"flex gap-3 px-2 mb-2"}
                  />
                  <div className="w-full max-h-42.5 overflow-y-auto">
                    {TeacherList ? (
                      <FilterSection param={"TeacherId"} data={searchTeacher} />
                    ) : (
                      ""
                    )}
                  </div>
                  {searchTeacher.length == 0 ? (
                    <NotFound size={"text-sm"} />
                  ) : (
                    ""
                  )}
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

          <Accordion
            className={"w-full border-b-1 border-neutral-50 text-right"}
            variant="surface"
          >
            <Accordion.Item>
              <Accordion.Heading className="h-10 flex items-center">
                <Accordion.Trigger
                  className={"flex justify-between w-full text-textC"}
                >
                  {t("Filter.format")}
                  <FaChevronDown />
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body>
                  {CourseTypeList ? (
                    <FilterSection
                      param={"CourseTypeId"}
                      data={CourseTypeList.data}
                    />
                  ) : (
                    ""
                  )}
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

          <Accordion
            className={"w-full border-b-1 border-neutral-50 text-right"}
            variant="surface"
          >
            <Accordion.Item>
              <Accordion.Heading className="h-10 flex items-center">
                <Accordion.Trigger
                  className={"flex justify-between w-full text-textC"}
                >
                  {t("Filter.level")}
                  <FaChevronDown />
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body>
                  {CourseLevelList ? (
                    <FilterSection
                      param={"courseLevelId"}
                      data={CourseLevelList.data}
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

export default CoursesFilter;

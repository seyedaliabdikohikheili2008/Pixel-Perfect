import React, { useMemo } from "react";
import Input from "../../../atoms/Input/Input";
import filter from "../../../../assets/images/icons/courses/filter.png";
import { Accordion, Label, Radio, RadioGroup, Slider } from "@heroui/react";
import { isFulfilled } from "@reduxjs/toolkit";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useAllTechnologies } from "../../../../core/hooks/queries/technologies/useAllTechnologies";
import { useAllTeacher } from "../../../../core/hooks/queries/teacher/useAllTeacher";
import FilterSection from "../../../molecules/filter-section/FilterSection";
import { useSearchParams } from "react-router-dom";

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

  const [searchParams, setSearchParams] = useSearchParams();

  const CostDown = searchParams.get("CostDown") || 0;
  const CostUp = searchParams.get("CostUp") || 10000000;

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
        newParams.set("CostDown", String(1));
        newParams.set("CostUp", String(10000000));
      } else {
        newParams.set("CostDown", String(0));
        newParams.set("CostUp", String(10000000));
      }
      return newParams;
    });
  };

  return (
    <>
      <div
        className={`${MenuStatus ? "block w-11/12 md:w-75" : "hidden w-75"} absolute top-15 left-1/2 -translate-x-1/2 md:translate-x-0 md:top-0 z-10 md:left-0 md:relative md:block  shrink-0 h-fit overflow-hidden bg-background rounded-2xl shadow-[0px_50px_100px_0px_#48484829]`}
      >
        <div className="w-11/12 flex flex-col gap-2 items-center mx-auto my-2">
          <Input
            boxClassname={"w-full flex items-center gap-2"}
            icon={filter}
            placeholder={"جستوجوی تکنولوژی"}
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
                  دسته بندی ها
                  <FaChevronDown />
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body>
                  {TechnologyList ? (
                    <FilterSection
                      param={"ListTech"}
                      data={TechnologyList?.data}
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
                  قیمت
                  <FaChevronDown />
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body>
                  <Slider
                    aria-label="price-range"
                    formatOptions={{ useGrouping: true, style: "decimal" }}
                    defaultValue={[CostDown, CostUp]}
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
                        return (
                          <>
                            <div
                              className="absolute h-full bg-primary-300 rounded-full"
                              style={{
                                right: `${left}%`,
                                width: `${right - left}%`,
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
                        <Label>فقط رایگان</Label>
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
                        <Label>فقط پولی</Label>
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
                        <Label>همه</Label>
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
                  اساتید
                  <FaChevronDown />
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body>
                  {TeacherList ? (
                    <FilterSection
                      param={"TeacherId"}
                      data={TeacherList.data}
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

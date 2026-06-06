import React from "react";
import Input from "../../../atoms/Input/Input";
import filter from "../../../../assets/images/icons/courses/filter.png";
import {
  Accordion,
  Checkbox,
  CheckboxGroup,
  Label,
  Radio,
  RadioGroup,
  Slider,
} from "@heroui/react";
import { isFulfilled } from "@reduxjs/toolkit";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useAllTechnologies } from "../../../../core/hooks/queries/technologies/useAllTechnologies";

const CoursesFilter = () => {
  const MenuStatus = useSelector((state) => state.CourseFilterMenu.value);

  const {
    data: TechnologyList = undefined,
    isError: TechnologyListErr,
    isLoading: TechnologyListLoading,
  } = useAllTechnologies();

  return (
    <>
      <div
        className={`${MenuStatus ? "block w-11/12 md:w-75" : "hidden w-75"} absolute top-15 left-1/2 -translate-x-1/2 md:translate-x-0 md:top-0 z-10 md:left-0 md:relative md:block  shrink-0 h-fit overflow-hidden bg-background rounded-2xl shadow-[0px_50px_100px_0px_#48484829]`}
      >
        {console.log(MenuStatus)}
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
                  <CheckboxGroup>
                    {TechnologyList?.data.map((tech, index) => {
                      return (
                        <Checkbox
                          className={"flex items-center gap-2"}
                          value={tech.techName}
                          key={tech.id}
                        >
                          <Checkbox.Control className="w-5 h-5 bg-primary-50 border-1 border-neutral-400 rounded-md p-1">
                            <Checkbox.Indicator className="text-primary-400" />
                          </Checkbox.Control>
                          <Checkbox.Content>
                            <Label className="text-textC">
                              {tech.techName}
                            </Label>
                          </Checkbox.Content>
                        </Checkbox>
                      );
                    })}
                  </CheckboxGroup>
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
                    formatOptions={{ useGrouping: true, style: "decimal" }}
                    defaultValue={[0, 10000000]}
                    minValue={0}
                    maxValue={10000000}
                    step={1000}
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
                    defaultValue="all"
                    name="free-or-money"
                    className={"flex w-full justify-between flex-wrap"}
                  >
                    <Radio
                      value="free"
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
                  <CheckboxGroup>
                    <Checkbox className={"flex items-center gap-2"} value="bahr">
                      <Checkbox.Control className="w-5 h-5 bg-primary-50 border-1 border-neutral-400 rounded-md p-1">
                        <Checkbox.Indicator className="text-primary-400" />
                      </Checkbox.Control>
                      <Checkbox.Content>
                        <Label className="text-textC">بحرالعلوم</Label>
                      </Checkbox.Content>
                    </Checkbox>
                  </CheckboxGroup>
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

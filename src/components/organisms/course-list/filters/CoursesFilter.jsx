import React from "react";
import Input from "../../../atoms/Input/Input";
import filter from "../../../../assets/images/icons/courses/filter.png";
import { Accordion, Checkbox, CheckboxGroup, Label } from "@heroui/react";
import { isFulfilled } from "@reduxjs/toolkit";
import { FaChevronDown } from "react-icons/fa";

const CoursesFilter = () => {
  return (
    <>
      <div className="w-1/5 h-150 bg-background rounded-2xl shadow-[0px_50px_100px_0px_#48484829]">
        <div className="w-11/12 flex flex-col items-center mx-auto my-2">
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
                <Accordion.Trigger className={"flex justify-between w-full"}>
                  دسته بندی ها
                  <FaChevronDown />
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body>
                  <CheckboxGroup>
                    <Checkbox className={"flex items-center gap-2"} value="css">
                      <Checkbox.Control className="w-5 h-5 bg-primary-50 border-1 border-neutral-400 rounded-md p-1">
                        <Checkbox.Indicator className="text-primary-400" />
                      </Checkbox.Control>
                      <Checkbox.Content>
                        <Label>css</Label>
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

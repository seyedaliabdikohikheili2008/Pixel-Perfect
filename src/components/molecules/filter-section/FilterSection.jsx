import { Label, Radio, RadioGroup } from "@heroui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSection = ({ data, param }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedId = searchParams.get(param) || "";

  const handleChange = (id) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (newParams.get(param) == id) {
        newParams.delete(param);
      } else {
        newParams.set(param, id);
      }
      return newParams;
    });
  };

  return (
    <>
      <RadioGroup
        aria-label="radioFilter"
        value={selectedId}
        name="radioFilter"
        className={"flex flex-col w-full justify-between flex-wrap"}
      >
        {data?.map((item, index) => {
          const id = String(item.id || item.teacherId);
          return (
            <Radio
              className={"flex items-center gap-2"}
              value={id}
              key={id}
              id={id}
              onClick={() => {
                handleChange(id);
              }}
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
                <Label className="text-textC">
                  {item.techName ||
                    item.fullName ||
                    item.typeName ||
                    item.levelName ||
                    item.categoryName}
                </Label>
              </Radio.Content>
            </Radio>
          );
        })}
      </RadioGroup>
    </>
  );
};

export default FilterSection;

import { Label, Radio, RadioGroup } from "@heroui/react";
import React, { useState } from "react";

const FilterSection = ({ data }) => {
  const [selectedId, setselectedId] = useState("");

  return (
    <>
      <RadioGroup
        value={selectedId}
        name="free-or-money"
        className={"flex flex-col w-full justify-between flex-wrap"}
      >
        {data.map((item, index) => {
          return (
            <Radio
              className={"flex items-center gap-2"}
              value={item.id || item.teacherId}
              key={item.id || item.teacherId}
              id={item.id || item.teacherId}
              onClick={() => {
                setselectedId(
                  selectedId == item.id || selectedId == item.teacherId
                    ? ""
                    : item.id || item.teacherId,
                );
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
                  {item.techName || item.fullName}
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

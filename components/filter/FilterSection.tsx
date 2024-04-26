"use client";

import React from "react";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from "@chakra-ui/react";

const FilterSection = ({
  children,
  filterList,
  setFilterList,
}: {
  children: React.ReactNode;
  filterList: string[];
  setFilterList: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  return (
    <>
      {children}
      <div className="mt-4 flex flex-wrap gap-4">
        {filterList.map((e, idx) => (
          <Tag
            key={idx}
            size="md"
            borderRadius="full"
            backgroundColor={"#718EBF"}
            className="p-1"
          >
            <TagLabel className="text-white">{e}</TagLabel>
            <TagCloseButton
              className="*:brightness-0 *:invert"
              onClick={() => setFilterList(old => old.filter(ele => ele !== e))}
            />
          </Tag>
        ))}
      </div>
    </>
  );
};

export default FilterSection;

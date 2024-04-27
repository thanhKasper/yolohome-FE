"use client";
import { FilterType } from "@/Type";
import Room from "@/components/Room";
import FilterSection from "@/components/filter/FilterSection";
import MySelect from "@/components/filter/MySelectMult";
import ResetButton from "@/components/filter/ResetButton";
import SearchBar from "@/components/filter/SearchBar";
import React, { useState } from "react";

const SensorsPage = () => {
  const [filterList, setFilterList] = useState<FilterType>({});
  console.log(filterList);
  return (
    <>
      <FilterSection filterList={filterList} setFilterList={setFilterList}>
        <div className="flex gap-2 items-center">
          <MySelect
            optList={["Temperature Sensor", "Distance Sensor"]}
            filterList={filterList}
            setFilterList={setFilterList}
            objField="sensors"
            placeholder="Sensors"
          />
          <MySelect
            optList={["Living Room", "Kitchen", "Bedroom", "Bathroom", "Yard"]}
            filterList={filterList}
            setFilterList={setFilterList}
            objField="rooms"
            placeholder="Rooms"
          />
          <SearchBar
            handleSearch={searchKeyword => {
              setFilterList(old => ({ ...old, searchKey: searchKeyword }));
            }}
            placeholder="Search Device Name"
          />
          <ResetButton setFilterList={setFilterList}/>
          <button className="bg-my-primary active:bg-blue-600 text-white py-1 px-2 rounded-md text-sm ml-auto">
            Add Room
          </button>
        </div>
      </FilterSection>
      <Room name="Living Room" kind="sensors" />
      <Room name="Kitchen" kind="sensors" />
      <Room name="Bedroom" kind="sensors" />
      <Room name="Garden" kind="sensors" />
    </>
  );
};

export default SensorsPage;

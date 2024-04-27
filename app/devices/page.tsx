"use client";
import Room from "@/components/Room";
import FilterSection from "@/components/filter/FilterSection";
import MySelect from "@/components/filter/MySelectMult";
import SearchBar from "@/components/filter/SearchBar";
import { FilterType } from "@/Type";

import React, { useState } from "react";

const Devices = () => {
  const [filterList, setFilterList] = useState<FilterType>({});
  console.log(filterList);
  return (
    <>
      <FilterSection filterList={filterList} setFilterList={setFilterList}>
        <div className="flex gap-2 items-center">
          <MySelect
            optList={["Fan", "Light", "Door"]}
            filterList={filterList}
            setFilterList={setFilterList}
            objField="devices"
            placeholder="Devices"
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
          <button
            className="flex items-center gap-1 hover:rounded-full hover:bg-slate-200 p-2 text-sm"
            onClick={() =>
              setFilterList({ devices: [], sensors: [], searchKey: "" })
            }
          >
            <img src="/filter/reset.png" alt="reset" className="w-4" />
            Reset
          </button>
          <button className="bg-my-primary active:bg-blue-600 text-white py-1 px-2 rounded-md text-sm ml-auto">
            Add Room
          </button>
        </div>
      </FilterSection>
      <Room name="Living Room" kind="devices" />
      <Room name="Kitchen" kind="devices" />
      <Room name="Bedroom" kind="devices" />
      <Room name="Garden" kind="devices" />
    </>
  );
};

export default Devices;

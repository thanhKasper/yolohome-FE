"use client";
import Room from "@/components/Room";
import FilterSection from "@/components/filter/FilterSection";
import MySelect from "@/components/filter/MySelect";
import SearchBar from "@/components/filter/SearchBar";

import React, { useState } from "react";

const Devices = () => {
  const [filterList, setFilterList] = useState<string[]>([]);
  return (
    <>
      <FilterSection filterList={filterList} setFilterList={setFilterList}>
        <div className="flex gap-2 items-center">
          <MySelect
            optList={["Fan", "Light", "Door"]}
            setFilterList={setFilterList}
            placeholder="Devices"
          />
          <MySelect
            optList={["Living Room", "Kitchen", "Bedroom", "Bathroom", "Yard"]}
            setFilterList={setFilterList}
            placeholder="Rooms"
          />
          <SearchBar
            setFilterList={setFilterList}
            placeholder="Search Device Name"
          />
          <button
            className="flex items-center gap-1 hover:rounded-full hover:bg-slate-200 p-2 text-sm"
            onClick={() => setFilterList([])}
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

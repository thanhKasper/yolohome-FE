import React, { useState } from "react";
import FilterSection from "../filter/FilterSection";
import { DeviceInfoType, FilterType } from "@/Type";
import MySelectMultiple from "../filter/MySelectMult";
import ResetButton from "../filter/ResetButton";
import DeviceInfo from "./DeviceInfo";

const DeviceChooseStep = ({
  handleAction,
  moveNext
}: {
  handleAction: React.Dispatch<
    React.SetStateAction<{
      device: DeviceInfoType;
      state: number | null;
    }>
  >;
  moveNext: () => void
}) => {
  const [filter, setFilter] = useState<FilterType>({});
  return (
    <>
      <FilterSection filterList={filter} setFilterList={setFilter}>
        <div className="flex gap-2">
          <MySelectMultiple
            optList={["Fan", "Light", "Door"]}
            filterList={filter}
            setFilterList={setFilter}
            objField="devices"
            placeholder="Device"
          />
          <MySelectMultiple
            optList={["Room1", "Room2", "Room3"]}
            filterList={filter}
            setFilterList={setFilter}
            objField="rooms"
            placeholder="Room"
          />
          <ResetButton setFilterList={setFilter} />
        </div>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-4">
          {[
            "Fan1",
            "Light1",
            "Door1",
            "Fan2",
            "Light2",
            "Door2",
            "Fan3",
            "Ligh3",
            "Door3",
            "Fan4",
            "Light4",
            "Door4",
          ].map((ele, id) => (
            <DeviceInfo
              key={id}
              deviceInf={{
                name: ele,
                type: "Fan",
                location: "Living Room",
              }}
              handleClick={chosenDevice => {
                handleAction(old => ({ ...old, device: chosenDevice }));
                moveNext()
              }}
            />
          ))}
        </div>
      </FilterSection>
    </>
  );
};

export default DeviceChooseStep;

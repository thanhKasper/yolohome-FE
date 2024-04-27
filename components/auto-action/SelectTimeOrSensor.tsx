"use client";

import { Select } from "@chakra-ui/react";
import React, { useState } from "react";
import SelectSensor from "./SelectSensor";

const SelectTimeOrSensor = ({
  setCmpType,
}: {
  setCmpType: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const selectTag = (
    <Select placeholder="Option" size='sm' bgColor={"white"} width={32} onChange={(e) => {
        if (e.target.value == "Time") {
            setDisplayJSX(<p>Current Time</p>)
            setCmpType("Time")
        }
        else if (e.target.value == "Sensor") {
            setDisplayJSX(<SelectSensor/>)
            setCmpType("Sensor")
        }
    }}>
      <option value="Time">Time</option>
      <option value="Sensor">Sensor</option>
    </Select>
  );
  const [displayJSX, setDisplayJSX] = useState(selectTag);
  return displayJSX;
};

export default SelectTimeOrSensor;

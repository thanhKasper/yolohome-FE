"use client";

import React, { useEffect, useState } from "react";
import SelectExp from "./SelectExp";
import SelectTimeOrSensor from "./SelectTimeOrSensor";
import CondInput from "./SensorInput";
import SensorInput from "./SensorInput";
import DateInput from "./DateInput";

const DisplayBinary = ({
  operator,
  lhs,
  rhs,
}: {
  operator: string;
  lhs: React.ReactNode;
  rhs: React.ReactNode;
}) => {
  // Sensor | Time
  const [cmpType, setCmpType] = useState<string>("None");
  console.log("Inside DisplayBinary with operator ", operator, cmpType);
  const binJsx = (
    <div className="flex items-center flex-wrap gap-1">
      <span className="font-semibold text-2xl select-none">(</span>
      {["and", "or"].indexOf(operator) == -1 ? (
        <SelectTimeOrSensor setCmpType={setCmpType} />
      ) : (
        lhs
      )}{" "}
      <span className="font-semibold select-none">{operator}</span>
      {["and", "or"].indexOf(operator) == -1 ? (
        cmpType == "Sensor" ? <SensorInput/> : cmpType == "Time" ? <DateInput/> : <p>Waiting...</p>
      ) : (
        rhs
      )}
      <span
        className="w-6 h-6 rounded-full flex items-center justify-center bg-slate-300 active:bg-slate-200"
        onClick={() => {
          handleClose();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="0.5rem"
          height="0.5rem"
          viewBox="0 0 14 14"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className="font-semibold text-2xl select-none">)</span>
    </div>
  );
  const [display, setDisplay] = useState(binJsx);

  useEffect(() => {
    setDisplay(binJsx)
  }, [cmpType])

  const handleClose = () => {
    setDisplay(<SelectExp />);
  };

  return display;
};

export default DisplayBinary;

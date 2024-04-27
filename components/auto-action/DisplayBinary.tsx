"use client";

import React, { useState } from "react";
import SelectExp from "./SelectExp";

const DisplayBinary = ({ operator, lhs, rhs }: { operator: string, lhs: React.ReactNode, rhs: React.ReactNode }) => {
  const binJsx = (
    <div className="flex items-center flex-wrap gap-1">
      <span className="font-semibold text-2xl select-none">(</span>
      {lhs}{" "}
      <span className="font-semibold select-none">{operator}</span>{" "}
      {rhs}
      <span className="w-6 h-6 rounded-full flex items-center justify-center bg-slate-300 active:bg-slate-200" onClick={()=>{handleClose()}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="0.5rem"
          height="0.5rem"
          viewBox="0 0 14 14"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      <span className="font-semibold text-2xl select-none">)</span>
    </div>
  );
  const [display, setDisplay] = useState(binJsx);

  const handleClose = () => {
    setDisplay(<SelectExp/>)
  }

  return display;
};

export default DisplayBinary;

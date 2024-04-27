import React, { useState } from "react";
import SelectExp from "./SelectExp";

const DisplayNot = ({ operand }: { operand: React.ReactNode }) => {
  const displayNot = (
    <div className="flex items-center flex-wrap gap-1">
      <span className="font-semibold select-none text-2xl">(</span>
      <span className="font-semibold select-none">not</span>
      {operand}
      <span
        className="w-6 h-6 rounded-full flex items-center justify-center bg-slate-300 active:bg-slate-200"
        onClick={() => {
          setShowJsx(<SelectExp />);
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
      <span className="font-semibold select-none text-2xl">)</span>
    </div>
  );
  const [showJsx, setShowJsx] = useState(displayNot);

  return showJsx;
};

export default DisplayNot;

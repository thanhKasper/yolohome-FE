"use client";

import React, { useState } from "react";
import { Select } from "@chakra-ui/react";
import DisplayAnd from "./DisplayAnd";
import DisplayOr from "./DisplayOr";
import DisplayNot from "./DisplayNot";
import DisplayBinary from "./DisplayBinary";
import SelectSensor from "./SelectSensor";

const SelectExp = () => {
  const selectExpr = (
    <Select
      placeholder="Choose operator"
      bgColor={"white"}
      size="sm"
      onChange={e => handleSelect(e.target.value)}
      width={40}
    >
      <option value="and">and</option>
      <option value="or">or</option>
      <option value="not">not</option>
      <option value="gt">&gt;</option>
      <option value="gte">&ge;</option>
      <option value="lt">&lt;</option>
      <option value="le">&le;</option>
      <option value="ne">&ne;</option>
    </Select>
  );
  const [displayExp, setDisplayExp] = useState(selectExpr);
  const handleSelect = (op: string) => {
    switch (op) {
      case "and":
        setDisplayExp(
          <DisplayBinary
            operator="and"
            lhs={<SelectExp />}
            rhs={<SelectExp />}
          />
        );
        break;
      case "or":
        setDisplayExp(
          <DisplayBinary
            operator="or"
            lhs={<SelectExp />}
            rhs={<SelectExp />}
          />
        );
        break;
      case "not":
        setDisplayExp(<DisplayNot operand={<SelectExp />} />);
        break;
      case "gt":
        setDisplayExp(
          <DisplayBinary
            operator="&gt;"
            lhs={<SelectSensor />}
            rhs={<p>This is greater than</p>}
          />
        );
        break;
      case "gte":
        setDisplayExp(
          <DisplayBinary
            operator="&ge;"
            lhs={<SelectSensor />}
            rhs={<p>This is greater than</p>}
          />
        );
        break;
      case "lt":
        setDisplayExp(
          <DisplayBinary
            operator="&lt;"
            lhs={<SelectSensor />}
            rhs={<p>This is greater than</p>}
          />
        );
        break;
      case "lte":
        setDisplayExp(
          <DisplayBinary
            operator="&le;"
            lhs={<SelectSensor />}
            rhs={<p>This is greater than</p>}
          />
        );
        break;
      default:
        setDisplayExp(selectExpr);
    }
  };

  return displayExp;
};

export default SelectExp;
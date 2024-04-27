"use client";

import React, { useState } from "react";
import { Select } from "@chakra-ui/react";
import DisplayNot from "./DisplayNot";
import DisplayBinary from "./DisplayBinary";
import SelectSensor from "./SelectSensor";
import CondInput from "./CondInput";

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
      <option value="eq">&#61;</option>
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
            rhs={<CondInput/>}
          />
        );
        break;
      case "gte":
        setDisplayExp(
          <DisplayBinary
            operator="&ge;"
            lhs={<SelectSensor />}
            rhs={<CondInput />}
          />
        );
        break;
      case "lt":
        setDisplayExp(
          <DisplayBinary
            operator="&lt;"
            lhs={<SelectSensor />}
            rhs={<CondInput />}
          />
        );
        break;
      case "lte":
        setDisplayExp(
          <DisplayBinary
            operator="&le;"
            lhs={<SelectSensor />}
            rhs={<CondInput />}
          />
        );
        break;
      case "ne":
        setDisplayExp(
          <DisplayBinary
            operator="&ne;"
            lhs={<SelectSensor />}
            rhs={<CondInput />}
          />
        );
        break;
      case "eq":
        setDisplayExp(
          <DisplayBinary
            operator="&#61;"
            lhs={<SelectSensor />}
            rhs={<CondInput />}
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

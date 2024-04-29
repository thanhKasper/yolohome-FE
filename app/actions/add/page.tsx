"use client";

import { DeviceInfoType } from "@/Type";
import ActionList from "@/components/auto-action/ActionList";
import SelectAction from "@/components/auto-action/SelectAction";
import SelectExp from "@/components/auto-action/SelectExp";
import { DeviceNode, IfStmt } from "@/utils/AST";
import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const AddAction = () => {
  const [actionName, setActionName] = useState<string>("");
  const [actionList, setActionList] = useState<
    {
      device: DeviceInfoType;
      state: number | null;
    }[]
  >([]);
  const ast = new IfStmt(null, []);
  console.log("My Action List", actionList);
  ast.actions = actionList.map(
    ele =>
      new DeviceNode(
        ele.device.name,
        ele.device.type,
        ele.device.location,
        ele.state ? ele.state : 0
      )
  );
  return (
    <>
      <h2 className="font-semibold text-xl mb-2">Action Name</h2>
      <Input
        variant={"outline"}
        placeContent="Enter Action name here"
        bgColor={"white"}
        size={"sm"}
        value={actionName}
        onChange={e => {
          setActionName(e.target.value);
        }}
      />
      <h2 className="font-semibold text-xl mb-2 mt-4">Condition</h2>
      <div>
        <SelectExp ast={ast} pos="none" />
      </div>
      <div className="flex items-center gap-4 mt-4">
        <h2 className="font-semibold text-xl">Actions</h2>
        <Button
          colorScheme="blue"
          size="sm"
          onClick={() => {
            console.log("CLick");
            setActionList(oldLst => {
              const newArr = oldLst.map(dev => ({ ...dev }));
              newArr.push({
                device: { name: "", type: "", location: "" },
                state: null,
              });
              return newArr;
            });
          }}
        >
          New Action
        </Button>
      </div>

      <ActionList>
        {actionList.map((deviceObj, idx) => (
          <SelectAction
            key={uuid()}
            deviceObj={deviceObj}
            updateActionList={setActionList}
            actionListIdx={idx}
          />
        ))}
        {/* <SelectAction ast={ast}/> */}
      </ActionList>
      <div className="w-full flex justify-end">
        <Button
          bgColor="#3531F0"
          color={"white"}
          _hover={{ bgColor: "#5855FC" }}
          onClick={() => {
            console.log(ast)
          }}
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default AddAction;

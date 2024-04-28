'use client'

import ActionList from '@/components/auto-action/ActionList';
import SelectAction from '@/components/auto-action/SelectAction';
import SelectExp from '@/components/auto-action/SelectExp';
import { IfStmt } from '@/utils/AST';
import { Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react'

const AddAction = () => {
  const [actionList, setActionList] = useState([])
  const ast = new IfStmt(null, [])
  return (
    <>
      <h2 className="font-semibold text-xl mb-2">Action Name</h2>
      <Input
        variant={"outline"}
        placeContent="Enter Action name here"
        bgColor={"white"}
        size={"sm"}
      />
      <h2 className="font-semibold text-xl mb-2 mt-4">Condition</h2>
      <div>
        <SelectExp ast={ast} pos="none" />
      </div>
      <h2 className="font-semibold text-xl mb-2 mt-4">Actions</h2>
      <ActionList>
        <SelectAction/>
        <SelectAction/>
        <SelectAction/>
      </ActionList>
      <Button colorScheme='blue' size='sm'>Add Action</Button>
      <button
        onClick={() => {
          console.log(ast);
        }}
        className="bg-black text-white"
      >
        Show ref
      </button>
    </>
  );
}

export default AddAction
'use client'

import SelectExp from '@/components/auto-action/SelectExp';
import { IfStmt } from '@/utils/AST';
import { Input } from '@chakra-ui/react';
import React, { useRef } from 'react'

const AddAction = () => {
  const ast = new IfStmt(null, [])
  return (
    <>
      <h2 className='font-semibold text-xl mb-2'>Action Name</h2>
      <Input variant={"outline"} placeContent="Enter Action name here" bgColor={"white"} size={"sm"}/>
      <h2 className='font-semibold text-xl mb-2 mt-4'>Condition</h2>
      <div>
        <SelectExp ast={ast} pos="none"/>
      </div>
      <button onClick={() => {console.log(ast)}} className='bg-black text-white'>Show ref</button>
    </>
  );
}

export default AddAction
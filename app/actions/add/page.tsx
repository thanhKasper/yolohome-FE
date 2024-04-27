import SelectExp from '@/components/auto-action/SelectExp';
import { Input } from '@chakra-ui/react';
import React from 'react'

const AddAction = () => {
  return (
    <>
      <h2 className='font-semibold text-xl mb-2'>Action Name</h2>
      <Input variant={"outline"} placeContent="Enter Action name here" bgColor={"white"} size={"sm"}/>
      <h2 className='font-semibold text-xl mb-2 mt-4'>Condition</h2>
      <div>
        <SelectExp/>
      </div>
    </>
  );
}

export default AddAction
import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import {v4 as uuid} from "uuid"

const MySelect = ({
  optList,
  setFilterList,
  placeholder,
}: {
  optList: string[];
  setFilterList: React.Dispatch<React.SetStateAction<string[]>>;
  placeholder: string
}) => {
  return (
    <Select
      onValueChange={e => {
        setFilterList(old => {
          const newDeviceList = [...old];
          newDeviceList.indexOf(e) == -1 && newDeviceList.push(e);
          return newDeviceList;
        });
      }}
    >
      <SelectTrigger className="w-40 bg-my-primary text-white h-8">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className='w-40'>
        {optList.map(item => (
          <SelectItem key={uuid()} value={item}>{item}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default MySelect